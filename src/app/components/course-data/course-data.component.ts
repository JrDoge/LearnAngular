import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.less',
})
export class CourseDataComponent {
  @Input() course!: CourseData;

  @Output() deleteEvent = new EventEmitter<CourseData>();

  deleteCourse() {
    this.deleteEvent.emit(this.course);
    console.log(this.course.id);
  }
}
