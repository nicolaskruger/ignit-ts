import { Request, response, Response } from 'express'
import { ImportCategoryUseCase } from './ImportCategoryUseCase'

export class ImportCategoryController {
    private importCategoryUseCase: ImportCategoryUseCase;

    constructor (importCategoryUseCase: ImportCategoryUseCase) {
      this.importCategoryUseCase = importCategoryUseCase
    }

    handle (req: Request<any, any, any, any, Record<string, any>>, res: Response):Response {
      const { file } = req
      return response.send()
    }
}
