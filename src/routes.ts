import { RequestHandler } from 'express'
import { CreateCourseService } from './CreateCourseService'

export const createCourse: RequestHandler = (req, res) => {
  CreateCourseService.execute(
    { name: 'NodeJS', duration: 10, educator: 'Nicolas' }
  )

  return res.send()
}
