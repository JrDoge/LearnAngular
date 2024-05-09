import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiLineClampModule, TuiBadgeModule } from '@taiga-ui/kit';
import { CourseDataComponent } from './course-data.component';
import { DurationPipe } from '../../pipes/duration.pipe';

@NgModule({
  declarations: [CourseDataComponent, DurationPipe],
  imports: [
    CommonModule,
    TuiLineClampModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule
  ],
  exports: [CourseDataComponent],
})
export class CourseDataModule {}
