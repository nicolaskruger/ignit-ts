import { Request, Response } from 'express'
import { ListCategoryUseCase } from './ListCategoryUseCase'

export class ListCategoryController {
  private listCategoryUseCase:ListCategoryUseCase;

  constructor (listCategoryUseCase:ListCategoryUseCase) {
    this.listCategoryUseCase = listCategoryUseCase
  }

  handle (req:Request<{}, {}, {}>, res:Response):Response {
    try {
      return res.status(200).json(this.listCategoryUseCase.execute())
    } catch (error) {
      return res.status(400).json(
        {
          msg: 'erro na listagem'
        }
      )
    }
  }
}
