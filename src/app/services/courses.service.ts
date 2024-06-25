// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable dot-notation */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, map } from 'rxjs';
import { courseMock } from '../components/course-data/course-mock';
import type { CourseData } from '../course-data';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesCollection$ = new BehaviorSubject<CourseData[]>([]);

  loadCourses$(courseName: string): Observable<void> {
    const courses: CourseData[] = courseMock
      .sort((a, b) => this.sortCourses(a, b))
      .filter((val) =>
        val.title.toLowerCase().includes(courseName.toLowerCase())
      );

    this.coursesCollection$.next(courses);

    const ob$: Observable<void> = new Observable((observer) => {
      observer.next();
      observer.complete();
    });
    return ob$;
  }

  getCoursesById(id: string): CourseData | undefined {
    let course: CourseData | undefined;
    this.coursesCollection$
      .asObservable()
      .pipe(map((val) => val.find((el) => el.id === id)))
      .subscribe((res) => {
        course = res;
      });
    return course;
  }

  addCourse(newCourse: CourseData) {
    this.coursesCollection$.pipe(map((val) => val.push(newCourse))).subscribe();
  }

  editCourse(id: string, info: Partial<CourseData>): void {
    let index;
    this.coursesCollection$
      .asObservable()
      .pipe(
        map((val) => {
          index = val.findIndex((el) => el.id === id);
          const gettedCourse = this.getCoursesById(id) as CourseData;
          const editCourse = Object.assign(gettedCourse, info);
          val[index] = editCourse;
        })
      )
      .subscribe();
  }

  deleteCourse(id: string) {
    let foundCourseIndex;
    this.coursesCollection$
      .asObservable()
      .pipe(
        map((val) => {
          foundCourseIndex = val.findIndex((el) => el.id === id);
          val.splice(foundCourseIndex, 1);
        })
      )
      .subscribe();
  }

  sortCourses(a: CourseData, b: CourseData) {
    const dateA = new Date(a.creationDate);
    const dateB = new Date(b.creationDate);
    return Number(dateB) - Number(dateA);
  }
}
