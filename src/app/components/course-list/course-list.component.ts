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
