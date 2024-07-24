import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiMultiSelectModule,
  TuiTextareaModule,
} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { AddCourseComponent } from './add-course.component';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [
    CommonModule,
    TuiInputModule,
    TuiTextareaModule,
    TuiMultiSelectModule,
    TuiButtonModule,
    TuiInputDateModule,
    TuiInputNumberModule
  ],
  exports: [AddCourseComponent],
})
export class AddCourseModule {}
