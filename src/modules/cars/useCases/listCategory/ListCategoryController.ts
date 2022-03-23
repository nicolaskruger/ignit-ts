import { Request, Response } from 'express'
import { injectable } from 'tsyringe'
import { ListCategoryUseCase } from './ListCategoryUseCase'

@injectable()
export class ListCategoryController {
  private listCategoryUseCase:ListCategoryUseCase;

  constructor (listCategoryUseCase:ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase
  }

  async handle (req:Request<{}, {}, {}>, res:Response):Promise<Response> {
    try {
      const categories = await this.listCategoryUseCase.execute()
      return res.status(200).json(categories)
    } catch (error) {
      return res.status(400).json(
        {
          msg: 'erro na listagem'
        }
      )
    }
  }
}
