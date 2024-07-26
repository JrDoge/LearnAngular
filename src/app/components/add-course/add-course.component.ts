import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { DurationPipe } from '../../pipes/duration.pipe';
import type { CourseData } from '../../course-data';
import { courseMock } from '../course-data/course-mock';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseComponent {
  pipe = new DurationPipe();
  title!: string;
  description!: string;
  date!: Date;
  duration!: number;
  authors!: string[];

  constructor(
    @Inject(CoursesService) private readonly courses: CoursesService
  ) {}

  saveCourse() {
    const newCourse: CourseData = {
      id: (Number(courseMock[-1].id) + 1).toString(),
      title: this.title,
      description: this.description,
      creationDate: `${this.date.getDate}-${this.date.getMonth}-${this.date.getFullYear}`,
      duration: this.duration,
      topRated: false,
    };
    this.courses.addCourse(newCourse)
  }
}
