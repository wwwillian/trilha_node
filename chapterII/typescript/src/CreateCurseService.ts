
/**
 * name - string
 * duration - number
 * educator - string
 */
interface Course {
  name: string;
  duration?: number;
  educator: string;
}

class CreateCourseService {

  excute({ duration = 20, educator, name }: Course) {
    console.log(name, duration, educator);
  }
}

export default new CreateCourseService();