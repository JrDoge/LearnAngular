import { Component } from '@angular/core';
import { courseMock } from '../course-data/course-mock';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {

  courses = courseMock.sort((a: CourseData, b: CourseData) => {
    return Number(new Date(String(b.creationDate))) - Number(new Date(String(a.creationDate)));
  });

  courseId!: string;

  loadNewCourses() {
    console.log(this.courses);
  }

  deleteSetCourse(courseId: string) {
    const foundCourseIndex = this.courses.findIndex(
      (course) => course.id === courseId
    );
    if (foundCourseIndex !== -1) {
      this.courses.splice(foundCourseIndex, 1);
      // this.courseList = this.courseList.filter(obj => obj.id !== courseId) альтернативный способ удаления объекта
    }

    console.log(foundCourseIndex);
  }

}
