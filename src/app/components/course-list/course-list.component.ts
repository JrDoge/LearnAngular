import { Component, Inject } from '@angular/core';
import { type Observable } from 'rxjs';

import { CoursesService } from '../../services/courses.service';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  informationIcon = 'assets/svgs/information.svg';

  notFound = false;

  courses$!: Observable<CourseData[]>;

  constructor(
    @Inject(CoursesService) private readonly courseService: CoursesService
  ) {
    this.courses$ = courseService.coursesCollection$.asObservable();
  }

  loadNewCourses() {
    console.log(this.courses$);
  }

  deleteSetCourse(id: string) {
    this.courseService.deleteCourse(id);
  }
}
