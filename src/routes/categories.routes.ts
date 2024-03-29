import { Request, Router } from 'express'
import multer from 'multer'
import createCategoryControler from '../modules/cars/useCases/createCategory'
import { CategoriesRequest } from '../modules/cars/entities/Category'
import { importCategoryController } from '../modules/cars/useCases/importCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategory'
const categoriesRoutes = Router()

const upload = multer({
  dest: './tmp'
})

categoriesRoutes.post('/', async (req: Request<{}, {}, CategoriesRequest>, res) => {
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
                          "description": {
                            "type": "string"
                          }
                        }
                       },
                  }
              }
          }
  */
  return await createCategoryControler().handle(req, res)
})

categoriesRoutes.get('/', async (req, res) => {
  /*
    #swagger.responses[200] = {
        description: "category list",
        content:{

          "application/json":{
            schema:{
              "type": "array",
              "items": {
                  "type": "object",
                  "properties": {
                      "id": {
                          "type": "string"
                      },
                      "name": {
                          "type": "string"
                      },
                      "description": {
                          "type": "string"
                      },
                      "createdAt": {
                          "type": "string"
                      }
                  }
              }
            }
        }
      }
    }
    #swagger.responses[500] = {
        description: "exception already exists",
    }
  */
  return await listCategoriesController().handle(req, res)
})

categoriesRoutes.post('/import', upload.single('file'), async (req, res) => {
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
  return await importCategoryController.handle(req, res)
})

export {
  categoriesRoutes
}
