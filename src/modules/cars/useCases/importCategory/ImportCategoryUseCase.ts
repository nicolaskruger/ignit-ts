import { Express } from 'express'
import fs from 'fs'
import { parse } from 'csv-parse'
import { ICategoryRepository } from '../../repositories/ICategoryRepository'
import { injectable } from 'tsyringe'

type IImportCategory = {
    name: string,
    description: string
}

@injectable()
export class ImportCategoryUseCase {
    private categoryRepository: ICategoryRepository;

    constructor (categoryRepository:ICategoryRepository) {
      this.categoryRepository = categoryRepository
    }

    private loadCategories (file: Express.Multer.File) {
      return new Promise<IImportCategory[]>((resolve, reject) => {
        const stream = fs.createReadStream(file.path)

        const parseFile = parse()

        stream.pipe(parseFile)

        const categories: IImportCategory[] = []

        parseFile.on('data', async (line) => {
          const [name, description] = line
          categories.push({
            name,
            description
          })
        }).on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories)
        }).on('error', (err) => {
          fs.promises.unlink(file.path)
          reject(err)
        })
      })
    }

    async execute (file: Express.Multer.File):Promise<void> {
      const categories = await this.loadCategories(file)
      categories.forEach(async (category) => {
        const { name, description } = category

        const exists = await this.categoryRepository.existsByName(name)

        if (!exists) {
          await this.categoryRepository.create({
            name,
            description
          })
        }
      })
    }
}
