import { Request, Response } from 'express'
import { ListCategoryUseCase } from './ListCategoryUseCase'

export class ListCategoryController {
  private listCategoryUseCase:ListCategoryUseCase;

  constructor (listCategoryUseCase:ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase
  }

  async handle (req:Request<{}, {}, {}>, res:Response):Promise<Response> {
    const categories = await this.listCategoryUseCase.execute()
    return res.status(200).json(categories)
  }
}
