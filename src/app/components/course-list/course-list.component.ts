import { Component, Inject, ViewChild } from '@angular/core';
import type { Observable } from 'rxjs';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
  takeUntil,
  tap,
  timer,
} from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { CoursesService } from '../../services/courses.service';
import type { CourseData } from '../../course-data';
import { SearchSectionComponent } from '../search-section/search-section.component';
import { LoaderService } from '../../services/loader.service';

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
    @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    @Inject(LoaderService) private readonly loader: LoaderService
  ) {
    loader.showLoader();
    timer(1000).subscribe();
    this.courses$ = courseService.coursesCollection$;
    loader.hideLoader();
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
        }),
        delay(1000)
      )
      .subscribe(() => this.loader.hideLoader());
  }
}
