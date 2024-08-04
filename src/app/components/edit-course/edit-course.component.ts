import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TUI_DEFAULT_MATCHER } from '@taiga-ui/cdk';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  filter,
  map,
  of,
  startWith,
  Subject,
  switchMap,
  type Observable,
} from 'rxjs';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import type { CourseData } from '../../interfaces/course-data';
import { CoursesService } from '../../services/courses.service';
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

  date!: string;
  duration!: number;

  courseInfo = new FormGroup({
    chosenAuthors: new FormControl(
      [''],
      [Validators.required, Validators.minLength(1)]
    ),
    description: new FormControl('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
  });

  authors: string[] = [];

  readonly search$ = new Subject<string | null>();
  readonly items$: Observable<readonly string[] | null> = this.search$.pipe(
    filter((val) => val !== null),
    switchMap((search) => this.requestAuthors(search).pipe(startWith(null)))
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
          this.date = course.creationDate;
          this.duration = course.duration;
          this.courseInfo.patchValue({
            chosenAuthors: course.authors,
            description: course.description,
          });
        }
      },
      error() {
        router.navigate(['404']);
      },
    });
    authorsService.getAuthors$().subscribe();
  }

  onClickChange() {
    this.search$.next('');
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery);
  }

  private requestAuthors(
    searchQuery: string | null
  ): Observable<readonly string[]> {
    return this.authorsService.authors.pipe(
      switchMap((val) => of(val)),
      map((authors) =>
        authors.filter((author) =>
          TUI_DEFAULT_MATCHER(author, searchQuery || '')
        )
      )
    );
  }

  saveCourse() {
    const getCourse = this.courseInfo.getRawValue();
    const newCourse: Partial<CourseData> = {
      description: getCourse.description !== null ? getCourse.description : '',
      authors:
        getCourse.chosenAuthors !== null ? getCourse.chosenAuthors : [''],
    };
    this.courses.editCourse(this.id, newCourse);
    this.router.navigate(['/courses']);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
