import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { type Observable } from 'rxjs';

import type { TuiDialogContext } from '@taiga-ui/core';
import { TuiDialogService } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import { Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import type { CourseData } from '../../interfaces/course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseListComponent {
  informationIcon = 'assets/svgs/information.svg';
  notFound = this.courseService.notFound.asObservable();

  id!: string;

  courses$: Observable<CourseData[]> = this.courseService.coursesCollection$;

  constructor(
    @Inject(CoursesService) private readonly courseService: CoursesService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
    @Inject(Router) private readonly router: Router
  ) {
    courseService.loadCourses$().subscribe();
  }

  showDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.dialogs.open(content).subscribe();
  }

  loadNewCourses() {
    this.courseService.loadMoreCourses$();
  }

  deleteCourse(id: string) {
    this.courseService.deleteCourse(id);
  }

  editCourse(id: string) {
    this.router.navigate(['/courses', id]);
  }
}
