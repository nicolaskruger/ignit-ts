import { Express } from 'express'
import fs from 'fs'

export class ImportCategoryUseCase {
  execute (file: Express.Multer.File) {
    const data = fs.createReadStream(file.path, 'utf-8')
  }
}
