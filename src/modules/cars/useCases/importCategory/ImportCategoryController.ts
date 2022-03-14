import { Request, Response, Express } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'
export class ImportCategoryController {
    private importCategoryUseCase: ImportCategoryUseCase;

    constructor (importCategoryUseCase: ImportCategoryUseCase) {
      this.importCategoryUseCase = importCategoryUseCase
    }

    handle (req: Request<any, any, any, any, Record<string, any>>, res: Response):Response {
      const { file } = req
      this.importCategoryUseCase.execute(file as Express.Multer.File)
      return res.send()
    }
}
