// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable dot-notation */

import { Injectable } from '@angular/core';
import { courseMock } from '../components/course-data/course-mock';
import type { CourseData } from '../course-data';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  course: Record<string, CourseData> = {
    1: courseMock[0],
    2: courseMock[1],
    3: courseMock[2],
    4: courseMock[3],
    5: courseMock[4],
    6: courseMock[5],
  };

  courses = Object.values(this.course);

  getCourses() {
    return this.courses.sort(
      (a: CourseData, b: CourseData) =>
        Number(new Date(b.creationDate)) - Number(new Date(a.creationDate))
    );
  }

  getCourseById(id: string): CourseData | undefined {
    return this.courses.find((element) => element.id === id);
  }

  addCourse(newCourse: CourseData) {
    this.courses.push(newCourse);
    return this.course;
  }

  editCourse(id: string, info: Partial<CourseData>): void {
    const gettedCourse = this.getCourseById(id);
    const index = this.courses.findIndex((element) => id === element.id);
    if (gettedCourse === undefined) {
      throw new Error('Course does not exist');
    }
    Object.assign(gettedCourse, info);
    this.courses[index] = gettedCourse;
  }

  deleteCourse(id: string) {
    const foundCourseIndex = this.courses.findIndex(
      (course: CourseData) => id === course.id
    );

    this.courses.splice(foundCourseIndex, 1);
  }
}
