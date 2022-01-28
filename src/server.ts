import express, { Request } from 'express'
import { createCourse } from './routes'
import { categoriesRoutes } from './routes/categories.routes'

const app = express()

app.use(express.json())

app.use('/categories', categoriesRoutes)

// app.get('/', createCourse)

// app.post('/courses', (req:Request<{}, {}, {name: string}>, res) => {
//   const { name } = req.body

//   return res.json({
//     name
//   })
// })

app.listen(3333, () => console.log('server is runig'))
