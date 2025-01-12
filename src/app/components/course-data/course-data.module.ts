import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  TuiButtonModule,
  TuiDialogModule,
  TuiDialogService,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiLineClampModule, TuiBadgeModule } from '@taiga-ui/kit';
import { CourseDataComponent } from './course-data.component';
import { ChangeBorderModule } from '../../directives/change-border.module';
import { DurationModule } from '../../pipes/duration.module';

@NgModule({
  declarations: [CourseDataComponent],
  imports: [
    CommonModule,
    TuiLineClampModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
    ChangeBorderModule,
    DurationModule,
    TuiDialogModule,
  ],
  exports: [CourseDataComponent],
  providers: [TuiDialogService],
})
export class CourseDataModule {}
