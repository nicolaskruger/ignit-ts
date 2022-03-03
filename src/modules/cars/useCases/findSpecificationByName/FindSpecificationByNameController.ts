import { Request, Response } from 'express'
import { FindSpecificationByNameUseCase } from './FindSpecificationByNameUseCase'

export class FindSpecificationByNameController {
    findSpecificationUseCase:FindSpecificationByNameUseCase

    constructor (findSpecificationUseCase:FindSpecificationByNameUseCase) {
      this.findSpecificationUseCase = findSpecificationUseCase
    }

    handle (req:Request<{name: string}, {}, {}>, res:Response):Response {
      const { name } = req.params

      try {
        return res.json(this.findSpecificationUseCase.execute(name))
      } catch (erro) {
        return res.status(400).json({
          msg: `specification with this name doesn't exists name: ${name}`
        })
      }
    }
}
