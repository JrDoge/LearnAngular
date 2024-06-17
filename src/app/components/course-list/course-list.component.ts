import type { SimpleChanges } from '@angular/core';
import { Component, Input, inject } from '@angular/core';
import type { CourseData } from '../../course-data';
import { FilterPipe } from '../../pipes/filter.pipe';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  informationIcon = 'assets/svgs/information.svg';

  courseService = inject(CoursesService);

  courses = this.courseService.getCourses();

  @Input() courseGetted!: string;

  ngOnChanges(changes: SimpleChanges) {
    // eslint-disable-next-line dot-notation
    if (!changes['courseGetted']) {
      return;
    }
    const regex = /[1-9]+/g;
    if (this.courseGetted.match(regex)) {
      const courseById = this.courseService.getCourseById(
        this.courseGetted
      ) as CourseData;
      console.log(courseById);
      this.courses = this.courseService
        .getCourses()
        .filter((course) => course === courseById);
      console.log(this.courses);
      return;
    }
    this.courses = new FilterPipe().transform(
      this.courseGetted,
      this.courseService.getCourses()
    );
  }

  loadNewCourses() {
    console.log(this.courses);
  }

  deleteSetCourse(id: string) {
    this.courseService.deleteCourse(id);
  }
}
