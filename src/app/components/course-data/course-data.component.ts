import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseDataComponent {
  @Input() course!: CourseData;
  @Output() deleteEvent = new EventEmitter<string>();
  @Output() editEvent = new EventEmitter<string>();

  deleteCourse() {
    this.deleteEvent.emit(this.course.id);
  }

  editCourse() {
    this.editEvent.emit(this.course.id);
  }
}
