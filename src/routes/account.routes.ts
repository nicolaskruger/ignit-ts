import { Request, Response, Router } from 'express'
import multer from 'multer'
import { container } from 'tsyringe'
import upload from '../config/upload'
import { ensureAuthenticated } from '../middlewares/ensureAuthentiticated'
import { ICreateUserDTO } from '../modules/accounts/dtos/ICreateUserDTO'
import { ILoginDTO } from '../modules/accounts/dtos/ILoginDTO'
import { AuthenticateUserController } from '../modules/accounts/useCases/authenticateUser/AuthenticateUserController'
import { CreateUserController } from '../modules/accounts/useCases/createUser/CreateUserController'
import { UpdateUserAvatarController } from '../modules/accounts/useCases/updateUserAvatar/UpdateUserAvatarController'

const accountRoutes = Router()

const uploadAvatar = multer(upload.upload('./tmp/avatar'))

accountRoutes.post('/', async (req: Request<{}, {}, ICreateUserDTO>, res: Response) => {
  /*
        #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": "string"
                          },
                          "a": {
                            "type": "string"
                          },
                          "userName": {
                            "type": "string"
                          },
                          "password": {
                            "type": "string"
                          },
                          "email": {
                            "type": "string"
                          },
                          "driverLicense": {
                            "type": "string"
                          }
                        }
                       },
                  }
              }
          }
  */
  return await container.resolve(CreateUserController).handle(req, res)
})

accountRoutes.post('/login', async (req: Request<{}, {}, ILoginDTO>, res: Response) => {
  /*
        #swagger.requestBody = {
              required: true,
              content: {
                  "application/json": {
                      schema: {
                        "type": "object",
                        "properties": {
                          "email": {
                            "type": "string"
                          },
                          "password": {
                            "type": "string"
                          }
                        }
                       },
                  }
              }
          }
  */
  return await container.resolve(AuthenticateUserController).handle(req, res)
})

accountRoutes.use(ensureAuthenticated)

accountRoutes.patch('/avatar', uploadAvatar.single('file'), async (req: Request<any, any, any, any, Record<string, any>>, res: Response) => {
  /*
        #swagger.requestBody = {
              required: true,
              content: {
                  "multipart/form-data": {
                      "schema": {
                        "type": "object",
                        "properties": {
                          "file": {
                            "type": "string",
                            "format": "binary"
                          }
                        }
                       },
                  }
              }
          }
        #swagger.responses[201] = {
          description: "Created",
        }
  */
  return await container.resolve(UpdateUserAvatarController).handle(req, res)
})

export {
  accountRoutes
}
