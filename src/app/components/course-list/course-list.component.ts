import { Component } from '@angular/core';
import { courseMock } from '../course-data/course-mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  courseList = courseMock.sort(this.compare);

  courseId!: string;

  compare(a: any, b: any) {
    const dateA: any = new Date(a.creationDate);
    const dateB: any = new Date(b.creationDate);

    return dateB - dateA;
  }

  loadNewCourses() {
    console.log(this.courseList);
  }

  deleteSetCourse(courseId: string) {
    const foundCourseIndex = this.courseList.findIndex(
      (course) => course.id === courseId
    );
    if (foundCourseIndex !== -1) {
      this.courseList.splice(foundCourseIndex, 1);
      // this.courseList = this.courseList.filter(obj => obj.id !== courseId) альтернативный способ удаления объекта
    }

    console.log(foundCourseIndex);
  }
}
