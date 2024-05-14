<<<<<<< HEAD
import { Component, Input } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
import { courseMock } from '../course-data/course-mock';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
<<<<<<< HEAD
  informationIcon = 'assets/svgs/information.svg';

  courses!: CourseData[];

  @Input() courseGetted: CourseData[] = [];

  ngOnChanges(): void {
    if (this.courseGetted === undefined) {
      this.courses = courseMock.sort(
        (a: CourseData, b: CourseData) =>
          Number(new Date(String(b.creationDate))) -
          Number(new Date(String(a.creationDate)))
      );
    } else {
      this.courses = this.courseGetted;
    }
  }

  loadNewCourses() {
    console.log(this.courses);
    console.log(this.courseGetted);
  }

  deleteSetCourse(selectedCourse: CourseData) {
    const foundCourseIndex = this.courses.findIndex(
      (course) => course === selectedCourse
    );
    if (foundCourseIndex !== -1) {
      this.courses.splice(foundCourseIndex, 1);
=======
  courses = courseMock.sort((a: CourseData, b: CourseData) => {
    return (
      Number(new Date(String(b.creationDate))) -
      Number(new Date(String(a.creationDate)))
    );
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
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    }

    console.log(foundCourseIndex);
  }
}
