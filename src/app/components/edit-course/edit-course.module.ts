import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterLink, provideRouter } from '@angular/router';
import {
  TuiButtonModule,
  TuiTextfieldControllerModule,
  TuiLabelModule,
  TuiDataListModule,
  TuiDropdownModule,
} from '@taiga-ui/core';
import {
  TuiInputModule,
  TuiTextareaModule,
  TuiMultiSelectModule,
  TuiDataListWrapperModule,
} from '@taiga-ui/kit';
import { TuiLetModule } from '@taiga-ui/cdk';
import { SimpleHeaderModule } from '../simple-header/simple-header.module';
import { routes } from '../../app.routes';
import { DurationModule } from '../../pipes/duration.module';
import { CoursesService } from '../../services/courses.service';
import { SimpleFooterModule } from '../simple-footer/simple-footer.module';
import { EditCourseComponent } from './edit-course.component';

@NgModule({
  declarations: [EditCourseComponent],
  imports: [
    CommonModule,
    TuiDropdownModule,
    ReactiveFormsModule,
    FormsModule,
    TuiInputModule,
    TuiTextareaModule,
    TuiMultiSelectModule,
    TuiButtonModule,
    TuiTextfieldControllerModule,
    TuiLabelModule,
    TuiDataListModule,
    TuiDataListWrapperModule,
    SimpleFooterModule,
    DurationModule,
    SimpleHeaderModule,
    RouterLink,
    TuiLetModule,
  ],
  exports: [EditCourseComponent],
  providers: [CoursesService, provideRouter(routes)],
})
export class EditCourseModule {}
