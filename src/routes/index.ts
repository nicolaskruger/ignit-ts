import { Router } from 'express'
import { categoriesRoutes } from '../routes/categories.routes'
import { specficationRoutes } from '../routes/specification.routes'
import { accountRoutes } from './account.routes'

const router = Router()

router.use('/categories', categoriesRoutes)

router.use('/specification', specficationRoutes)

router.use('/account', accountRoutes)

export { router }
