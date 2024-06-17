// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable dot-notation */

import { Injectable } from '@angular/core';
import { courseMock } from '../components/course-data/course-mock';
import type { CourseData } from '../course-data';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  course: Record<string, CourseData[]> = { courseMock };

  getCourses(): CourseData[] {
    return this.course['courseMock'].sort(
      (a: CourseData, b: CourseData) =>
        Number(new Date(b.creationDate)) - Number(new Date(a.creationDate))
    );
  }

  getCourseById(id: string): CourseData | undefined {
    const index = this.course['courseMock'].findIndex(
      (element) => id === element.id
    );
    console.log(this.course['courseMock']);
    console.log(index);
    return this.course['courseMock'].at(index);
  }

  addCourse(newCourse: CourseData): CourseData[] {
    this.course['courseMock'].push(newCourse);

    return this.course['courseMock'];
  }

  editCourse(id: string, info: Partial<CourseData>): void {
    const gettedCourse = this.getCourseById(id);
    const index = this.course['courseMock'].findIndex(
      (element) => id === element.id
    );
    if (gettedCourse === undefined) {
      throw new Error('Choose correct course');
    }
    if (info.description !== undefined) {
      gettedCourse.description = info.description;
    }
    if (info.title !== undefined) {
      gettedCourse.title = info.title;
    }
    if (info.topRated !== undefined) {
      gettedCourse.topRated = info.topRated;
    }
    if (info.duration !== undefined) {
      gettedCourse.duration = info.duration;
    }
    this.course['courseMock'][index] = gettedCourse;
  }

  deleteCourse(id: string) {
    const foundCourseIndex = this.course['courseMock'].findIndex(
      (course: CourseData) => id === course.id
    );

    this.course['courseMock'].splice(foundCourseIndex, 1);
  }
}
