import { Component, EventEmitter, Input, Output } from '@angular/core';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.less',
})
export class CourseDataComponent {
  @Input() course!: CourseData;

  @Output() deleteEvent: EventEmitter<string> = new EventEmitter<string>();

  deleteCourse() {
    this.deleteEvent.emit(this.course.id);
    console.log(this.course.id);
  }
}
