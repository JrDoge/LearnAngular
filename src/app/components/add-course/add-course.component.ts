/* eslint-disable eqeqeq */
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { TuiDay } from '@taiga-ui/cdk';
import { FormBuilder } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { of } from 'rxjs';
import type { CourseData } from '../../course-data';
import { CoursesService } from '../../services/courses.service';
import { authorsMock } from '../../authors-mock';
import { LoaderService } from '../../services/loader.service';

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
        min: 'Min number 1',
      },
    },
  ],
})
export class AddCourseComponent {
  authors: string[] = authorsMock;

  course = this.fb.group({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(50),
    ]),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.maxLength(500),
    ]),
    date: new FormControl<TuiDay>(
      new TuiDay(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      Validators.required
    ),
    duration: new FormControl<number>(0, [
      Validators.required,
      Validators.min(1),
    ]),
    chosenAuthors: new FormControl<string[]>(
      [],
      [Validators.required, Validators.minLength(1)]
    ),
  });

  constructor(
    @Inject(FormBuilder) private readonly fb: FormBuilder,
    @Inject(CoursesService) private readonly courses: CoursesService,
    @Inject(Router) private readonly router: Router,
    @Inject(LoaderService) private readonly loader: LoaderService
  ) {}

  saveCourse() {
    const newCourse: CourseData = {
      id: `${Date.now()}`,
      title:
        this.course.value.title == (null || undefined)
          ? ''
          : this.course.value.title,
      creationDate:
        this.course.value.date == (undefined || null)
          ? ''
          : `${this.course.value.date.year}-${(this.course.value.date.month + 1)
              .toString()
              .padStart(2, '0')}-${this.course.value.date?.day
              .toString()
              .padStart(2, '0')}`,
      duration:
        this.course.value.duration == null || undefined
          ? 0
          : this.course.value.duration,
      description:
        this.course.value.description == null || undefined
          ? ''
          : this.course.value.description,
      topRated: false,
      authors:
        this.course.value.chosenAuthors == null || undefined
          ? ['']
          : this.course.value.chosenAuthors,
    };
    this.courses.addCourse(newCourse);
    this.router.navigate(['/courses']);
  }

  cancel() {
    this.router.navigate(['/courses']);
  }
}
