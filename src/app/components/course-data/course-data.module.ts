import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiLineClampModule, TuiBadgeModule } from '@taiga-ui/kit';
import { CourseDataComponent } from './course-data.component';
<<<<<<< HEAD
import { DurationPipe } from '../../pipes/duration.pipe';
import { MarkTopDirective } from '../../directives/mark-top.directive';
import { ChangeBorderDirective } from '../../directives/change-border.directive';

@NgModule({
  declarations: [
    CourseDataComponent,
    DurationPipe,
    MarkTopDirective,
    ChangeBorderDirective,
  ],
=======

@NgModule({
  declarations: [CourseDataComponent],
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  imports: [
    CommonModule,
    TuiLineClampModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
  ],
  exports: [CourseDataComponent],
})
export class CourseDataModule {}
