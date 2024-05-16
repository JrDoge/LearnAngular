import { Component, Input } from '@angular/core';
import { courseMock } from '../course-data/course-mock';
import type { CourseData } from '../../course-data';
import { FilterPipe } from '../../pipes/filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  informationIcon = 'assets/svgs/information.svg';

  courses: CourseData[] = courseMock.sort(
    (a: CourseData, b: CourseData) =>
      Number(new Date(String(b.creationDate))) -
      Number(new Date(String(a.creationDate)))
  );

  @Input() courseGetted!: string;

  ngOnChanges(): void {
    const pipe = new FilterPipe();
    this.courses = pipe.transform(this.courseGetted, courseMock);
  }

  loadNewCourses() {
    console.log(this.courses);
  }

  deleteSetCourse(selectedCourse: CourseData) {
    const foundCourseIndex = this.courses.findIndex(
      (course) => course === selectedCourse
    );
    if (foundCourseIndex !== -1) {
      this.courses.splice(foundCourseIndex, 1);
    }

    console.log(foundCourseIndex);
  }
}
