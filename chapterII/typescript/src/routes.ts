import { Request, Response } from 'express';
import CreateCourseService from './CreateCurseService';

export function createCourse(request: Request, response: Response) {

  CreateCourseService.excute({
    name: "NodeJS",
    educator: "Will",
    duration: 10
  });

  CreateCourseService.excute({
    name: "Java",
    educator: "Ana"
  });

  return response.send();
}