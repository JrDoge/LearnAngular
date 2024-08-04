import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TUI_DEFAULT_MATCHER, TuiDay } from '@taiga-ui/cdk';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import type { Observable } from 'rxjs';
import { filter, map, of, startWith, Subject, switchMap } from 'rxjs';
import type { CourseData } from '../../interfaces/course-data';
import { CoursesService } from '../../services/courses.service';
import { authorsMock } from '../../mocks/authors-mock';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.less',
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
        min: 'Min 1 minute',
      },
    },
  ],
})
export class AddCourseComponent {
  currentDate = new Date();
  authors: string[] = authorsMock;
  course = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(50)]],
    description: ['', [Validators.required, Validators.maxLength(500)]],
    date: [
      new TuiDay(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth(),
        this.currentDate.getDate()
      ),
      Validators.required,
    ],
    duration: [0, [Validators.required, Validators.min(1)]],
    chosenAuthors: [[], [Validators.required, Validators.minLength(1)]],
  });

  readonly search$ = new Subject<string | null>();
  readonly items$: Observable<readonly string[] | null> = this.search$.pipe(
    filter((val) => val !== null),
    switchMap((search) => this.requestAuthors(search).pipe(startWith(null)))
  );

  constructor(
    @Inject(FormBuilder) private readonly fb: FormBuilder,
    @Inject(CoursesService) private readonly courses: CoursesService,
    @Inject(Router) private readonly router: Router,
    @Inject(AuthorsService) private readonly authorsService: AuthorsService
  ) {
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
    const getCourse = this.course.getRawValue();

    const newCourse: CourseData = {
      id: `${Date.now()}`,
      title: getCourse.title !== null ? getCourse.title : '',
      creationDate:
        getCourse.date === null
          ? ''
          : `${getCourse.date.year}-${(getCourse.date.month + 1)
              .toString()
              .padStart(2, '0')}-${getCourse.date.day
              .toString()
              .padStart(2, '0')}`,
      duration: getCourse.duration !== null ? getCourse.duration : 0,
      description: getCourse.description === null ? '' : getCourse.description,
      topRated: false,
      authors:
        getCourse.chosenAuthors === null ? [''] : getCourse.chosenAuthors,
    };
    this.course.get('title');
    this.courses.addCourse(newCourse);
    this.router.navigate(['/courses']);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
