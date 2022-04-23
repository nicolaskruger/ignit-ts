import { Request, Response } from 'express'
import { FindSpecificationByNameUseCase } from './FindSpecificationByNameUseCase'

export class FindSpecificationByNameController {
    findSpecificationUseCase:FindSpecificationByNameUseCase

    constructor (findSpecificationUseCase:FindSpecificationByNameUseCase) {
      this.findSpecificationUseCase = findSpecificationUseCase
    }

    async handle (req:Request<{name: string}, {}, {}>, res:Response):Promise<Response> {
      const { name } = req.params

      return res.json(await this.findSpecificationUseCase.execute(name))
    }
}
