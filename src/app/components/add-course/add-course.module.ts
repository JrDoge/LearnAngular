import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiMultiSelectModule,
  TuiTextareaModule,
} from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDataListModule,
  TuiLabelModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCourseComponent } from './add-course.component';
import { SimpleFooterModule } from '../simple-footer/simple-footer.module';
import { SimpleHeaderModule } from '../simple-header/simple-header.module';
import { DurationModule } from '../../pipes/duration.module';
import { CoursesService } from '../../services/courses.service';

@NgModule({
  declarations: [AddCourseComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    TuiTextareaModule,
    TuiMultiSelectModule,
    TuiButtonModule,
    TuiInputDateModule,
    TuiInputNumberModule,
    TuiTextfieldControllerModule,
    TuiLabelModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    SimpleFooterModule,
    DurationModule,
    SimpleHeaderModule,
  ],
  exports: [AddCourseComponent],
  providers: [CoursesService]
})
export class AddCourseModule {}
