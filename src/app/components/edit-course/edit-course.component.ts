import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import { FormControl } from '@angular/forms';
import {
  delay,
  filter,
  of,
  startWith,
  Subject,
  switchMap,
  type Observable,
} from 'rxjs';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import type { CourseData } from '../../course-data';
import { CoursesService } from '../../services/courses.service';
import { authorsMock } from '../../authors-mock';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'This field must be filled!',
        maxlength: ({ requiredLength }: { requiredLength: string }) =>
          `Maximum length — ${requiredLength}`,
        minlength: ({ requiredLength }: { requiredLength: string }) =>
          of(`Minimum length — ${requiredLength}`),
      },
    },
  ],
})
export class EditCourseComponent {
  id!: string;
  title!: string;
  description = new FormControl('', { nonNullable: true });
  date!: string;
  duration!: number;
  chosenAuthors = new FormControl([''], { nonNullable: true });
  // course = this.courses.getCoursesById(this.id);
  authors: string[] = authorsMock;

  readonly search$ = new Subject<string | null>();

  readonly items$: Observable<readonly string[] | null> = this.search$.pipe(
    filter((val) => val !== null),
    switchMap((search) =>
      this.matchAuthors(search).pipe(startWith<readonly string[] | null>(null))
    ),
    startWith(authorsMock)
  );

  constructor(
    @Inject(CoursesService) private readonly courses: CoursesService,
    @Inject(Router) private readonly router: Router,
    @Inject(ActivatedRoute) private readonly activatedRoute: ActivatedRoute,
    @Inject(AuthorsService) private readonly authorsService: AuthorsService
  ) {
    activatedRoute.params.subscribe((param) => {
      // eslint-disable-next-line dot-notation
      this.id = param['id'];
    });
    courses.getCoursesById(this.id).subscribe({
      next: (course) => {
        if (course) {
          this.title = course.title;
          this.description.setValue(course.description);
          this.date = course.creationDate;
          this.duration = course.duration;
          this.chosenAuthors.setValue(course.authors);
        }
      },
      error() {
        router.navigate(['404']);
      },
    });
    
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery);
  }

  private matchAuthors(
    searchQuery: string | null
  ): Observable<readonly string[]> {
    const result = authorsMock.filter((author) =>
      TUI_DEFAULT_MATCHER(author, searchQuery || '')
    );
    return of(result).pipe(delay(1000));
  }

  saveCourse() {
    const newCourse: Partial<CourseData> = {
      description: this.description.value,
      authors: this.chosenAuthors.value,
    };
    this.courses.editCourse(this.id, newCourse);
    this.router.navigate(['/courses']);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
