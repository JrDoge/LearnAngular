import { Component, Input, SimpleChanges } from '@angular/core';
import { courseMock } from '../course-data/course-mock';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.less',
})
export class CourseListComponent {

  informationIcon = 'assets/svgs/information.svg'

  courses!: CourseData[];

  @Input() courseGetted: CourseData[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if(this.courseGetted === undefined){
      this.courses = courseMock.sort((a: CourseData, b: CourseData) => 
        Number(new Date(String(b.creationDate))) -
        Number(new Date(String(a.creationDate))))
    }else{
      this.courses = this.courseGetted;
    }
  }

  loadNewCourses() {
    console.log(this.courses);
    console.log(this.courseGetted)
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
