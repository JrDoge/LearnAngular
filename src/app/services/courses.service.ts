/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable dot-notation */

import { Inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import type { CourseData } from '../course-data';
import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  coursesCollection$ = new BehaviorSubject<CourseData[]>([]);

  notFound = new BehaviorSubject<boolean>(false);
  currentPage = 1;
  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(Router) private readonly router: Router
  ) {
  }

  loadCourses$(): Observable<void> {
    this.loader.showLoader();
    return this.http
      .get<CourseData[]>(
        `http://localhost:3001/courses?q=&_sort=creationDate&_order=desc&_page=${this.currentPage}&_limit=3`
      )
      .pipe(
        tap((courses) => {
          this.coursesCollection$.next(courses);
        }),
        finalize(() => this.loader.hideLoader()),
        map(() => undefined)
      );
  }

  loadMoreCourses$() {
    this.loader.showLoader();
    const newPage = this.currentPage + 1;

    this.http
      .get<CourseData[]>(
        `http://localhost:3001/courses?q=&_sort=creationDate&_order=desc&_page=${newPage}&_limit=3`
      )
      .pipe(
        tap((response) => {
          if (response.length !== 0) {
            this.currentPage++;
            const newCourse = this.coursesCollection$
              .getValue()
              .concat(response);
            this.coursesCollection$.next(newCourse);
          }
        }),
        finalize(() => this.loader.hideLoader())
      )
      .subscribe();
  }

  searchCourses(searchQuery: string) {
    this.loader.showLoader();
    return this.http
      .get<CourseData[]>(`http://localhost:3001/courses`, {
        params: {
          q: searchQuery,
        },
      })
      .pipe(
        tap((course) => {
          this.coursesCollection$.next(course);
        }),
        finalize(() => this.loader.hideLoader())
      );
  }

  getCoursesById(id: string): Observable<CourseData | undefined> {
    this.loader.showLoader();
    return this.http
      .get<CourseData>(`http://localhost:3001/courses/${id}`)
      .pipe(finalize(() => this.loader.hideLoader()));
  }

  addCourse(newCourse: CourseData) {
    this.loader.showLoader();
    this.http
      .post('http://localhost:3001/courses', newCourse)
      .pipe(
        tap(() => this.loadCourses$().subscribe()),
        finalize(() => this.loader.hideLoader())
      )
      .subscribe();
  }

  editCourse(id: string, info: Partial<CourseData>): void {
    this.loader.showLoader();
    this.http
      .patch(`http://localhost:3001/courses/${id}`, info)
      .pipe(
        tap(() => this.loadCourses$().subscribe()),
        finalize(() => this.loader.hideLoader())
      )
      .subscribe();
  }

  deleteCourse(id: string) {
    this.loader.showLoader();
    this.http
      .delete(`http://localhost:3001/courses/${id}`)
      .pipe(
        tap(() => this.loadCourses$().subscribe()),
        finalize(() => this.loader.hideLoader())
      )
      .subscribe();
  }
}
