import { Component } from '@angular/core';
import { courseMock } from '../course-data/course-mock';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {

  courseList = courseMock.sort(this.compare)
  
  courseId!: string

  compare(a: any,b: any) {
    let dateA: any = new Date(a.creationDate)
    let dateB: any = new Date(b.creationDate)

    return dateB - dateA
  }

  loadNewCourses() {
    console.log('Done');
    console.log(this.courseList)
  }

  deleteSetCourse(courseId: string){
    let foundCourseIndex = this.courseList.findIndex(course => course.id == courseId)
    if(foundCourseIndex != -1){
      this.courseList.splice(foundCourseIndex, 1)
      // this.courseList = this.courseList.filter(obj => obj.id !== courseId)
    }

    console.log(foundCourseIndex)
  }
}
