import 'reflect-metadata'
import express from 'express'
import 'express-async-errors'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../swagger.json'
import './database'
import { containerConfig } from './shared/container'
import { errorMiddleware } from './middlewares/ErroMiddleware'

containerConfig()

const app = express()

app.use(express.json())


app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use(errorMiddleware)

app.listen(3333, () => console.log('server is runig'))
