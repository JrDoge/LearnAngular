import { Component } from '@angular/core';
// import { CourseMock } from './course-mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {
  loadNewCourses() {
    // console.log(CourseMock.courseMock[0]);
    console.log('Done');
  }
}
