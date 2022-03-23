import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'
import { CategoriesRequest } from '../../entities/Category'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

@injectable()
export class CreateCategoryController {
    createCategoryUseCase:CreateCategoryUseCase;

    constructor (@inject(CreateCategoryUseCase) createCategoryUseCase:CreateCategoryUseCase) {
      this.createCategoryUseCase = createCategoryUseCase
    }

    async handle (req: Request<{}, {}, CategoriesRequest>, res: Response):Promise<Response> {
      const { name, description } = req.body

      try {
        const response = await this.createCategoryUseCase.execute({
          name,
          description
        })
        return res.status(201).json(response)
      } catch (error) {
        const erroType = error as Error
        return res.status(409).json({
          msg: erroType.message
        })
      }
    }
}
