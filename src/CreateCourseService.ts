
interface Course {
    name: string;
    duration: number;
    educator: string
}

export class CreateCourseService {
  static execute ({ name, duration, educator }: Course) {
    console.log({ name, duration, educator })
    const test = ''
  }
}
