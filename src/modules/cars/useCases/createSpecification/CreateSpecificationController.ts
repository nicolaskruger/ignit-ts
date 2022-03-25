import { Request, Response } from 'express'
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase'

type SpecificationRequest = {
    name: string,
    description: string,
}

export class CreateSpecificationController {
    createSpecificationUseCase:CreateSpecificationUseCase

    constructor (createSpecificationUseCase: CreateSpecificationUseCase) {
      this.createSpecificationUseCase = createSpecificationUseCase
    }

    async handle (req:Request<{}, {}, SpecificationRequest>, res: Response):Promise<Response> {
      const { name, description } = req.body

      try {
        await this.createSpecificationUseCase.execute({
          name,
          description
        })

        return res.status(201).send()
      } catch (error) {
        const errorType = error as Error

        return res.status(400).json({
          msg: errorType.message
        })
      }
    }
}
