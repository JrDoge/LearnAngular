import { Component, Inject, ViewChild } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
  takeUntil,
} from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { CoursesService } from '../../services/courses.service';
import type { CourseData } from '../../course-data';
import { SearchSectionComponent } from '../search-section/search-section.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  informationIcon = 'assets/svgs/information.svg';

  courses: CourseData[] = [];

  @ViewChild(SearchSectionComponent) component!: SearchSectionComponent;
  constructor(
    @Inject(CoursesService) private readonly courseService: CoursesService,
    @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService
  ) {
    courseService.coursesCollection$.subscribe((course) => {
      this.courses = course;
      console.log(course);
    });

    courseService
      .loadCourses$('')
      .subscribe((course) => console.log('end', course));
  }

  loadNewCourses() {
    console.log(this.courses);
  }

  deleteSetCourse(id: string) {
    this.courseService.deleteCourse(id);
  }

  ngAfterViewInit(): void {
    const input = this.component.input
      .nativeFocusableElement as HTMLInputElement;
    fromEvent(input, 'keyup')
      .pipe(
        takeUntil(this.destroy$),
        map(() => input.value),
        debounceTime(1000),
        distinctUntilChanged(),
        filter((v) => v.length >= 3),
        switchMap((v) => this.courseService.loadCourses$(v))
      )
      .subscribe();
  }
}
