import { Request, Response, Express } from 'express'
import { injectable } from 'tsyringe'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

@injectable()
export class ImportCategoryController {
    private importCategoryUseCase: ImportCategoryUseCase;

    constructor (importCategoryUseCase: ImportCategoryUseCase) {
      this.importCategoryUseCase = importCategoryUseCase
    }

    async handle (req: Request<any, any, any, any, Record<string, any>>, res: Response):Promise<Response> {
      const { file } = req
      await this.importCategoryUseCase.execute(file as Express.Multer.File)
      return res.status(201).send()
    }
}
