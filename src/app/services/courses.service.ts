// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable dot-notation */

import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { of, tap } from 'rxjs';
import { BehaviorSubject, map } from 'rxjs';
import { courseMock } from '../components/course-data/course-mock';
import type { CourseData } from '../course-data';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesCollection$ = new BehaviorSubject<CourseData[]>([]);
  notFound!: boolean;

  loadCourses$(courseName: string): Observable<void> {
    const courses: CourseData[] = courseMock.sort((a, b) =>
      this.sortCourses(a, b)
    );
    return of(courses).pipe(
      map((value) =>
        value.filter((val) =>
          val.title.toLowerCase().includes(courseName.toLowerCase())
        )
      ),
      tap((val) => {
        if (val.length === 0) {
          this.notFound = true;
        }
        this.coursesCollection$.next(val);
        this.notFound = false;
      }),
      map(() => undefined)
    );
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
    return this.coursesCollection$.pipe(map((val) => val.push(newCourse)));
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
    let index;
    this.coursesCollection$
      .asObservable()
      .pipe(
        map((val) => {
          index = val.findIndex((el) => el.id === id);
          val.splice(index, 1);
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
