import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

import type { TuiDialogContext } from '@taiga-ui/core';
import { TuiDialogService } from '@taiga-ui/core';
import type { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';
import type { CourseData } from '../../course-data';

@Component({
  selector: 'app-course-data',
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.less',
})
export class CourseDataComponent {
  @Input() course!: CourseData;
  @Output() deleteEvent = new EventEmitter<string>();
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  showDialog(content: PolymorpheusContent<TuiDialogContext>) {
    this.dialogs.open(content).subscribe();
  }

  deleteCourse() {
    this.deleteEvent.emit(this.course.id);
  }
}
