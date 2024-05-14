import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.less',
})
export class CourseDataComponent {
  @Input() course!: CourseData;

<<<<<<< HEAD
  @Output() deleteEvent = new EventEmitter<CourseData>();

  deleteCourse() {
    this.deleteEvent.emit(this.course);
=======
  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  deleteCourse() {
    this.deleteEvent.emit(this.course.id);
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    console.log(this.course.id);
  }
}
