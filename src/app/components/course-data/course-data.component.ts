import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CourseData } from '../../course-data';
import { courseMock } from './course-mock';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.less'
})
export class CourseDataComponent {
  @Input() course!: CourseData

  @Output() deleteEvent = new EventEmitter<string>()

  deleteCourse(){
    this.deleteEvent.emit(this.course.id)
    console.log(this.course.id)
  }
}
