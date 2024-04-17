import { Component } from '@angular/core';
import { courseMock } from '../course-data/course-mock';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  courseList = courseMock.sort((a: CourseData, b: CourseData) => {
    return Number(new Date(b.creationDate)) - Number(new Date(a.creationDate));
  });

  courseId!: string;

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
