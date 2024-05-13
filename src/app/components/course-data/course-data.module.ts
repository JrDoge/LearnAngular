import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiLineClampModule, TuiBadgeModule } from '@taiga-ui/kit';
import { CourseDataComponent } from './course-data.component';
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
