import { Component, Inject, ViewChild } from '@angular/core';
import type { Observable } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
  takeUntil,
  tap,
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

  notFound = false;

  courses$!: Observable<CourseData[]>;

  @ViewChild(SearchSectionComponent) component!: SearchSectionComponent;
  constructor(
    @Inject(CoursesService) private readonly courseService: CoursesService,
    @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService
  ) {
    this.courses$ = courseService.coursesCollection$;
  }

  loadNewCourses() {
    console.log(this.courses$);
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
        switchMap((v) => this.courseService.loadCourses$(v)),
        tap(() => {
          if (this.courseService.coursesCollection$.value.length === 0) {
            this.notFound = true;
          }
        })
      )
      .subscribe();
  }
}
