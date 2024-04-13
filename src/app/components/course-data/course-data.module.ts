import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseDataComponent } from './course-data.component';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiLineClampModule, TuiBadgeModule } from '@taiga-ui/kit';



@NgModule({
  declarations: [CourseDataComponent],
  imports: [
    CommonModule,
    TuiLineClampModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
  ],
  exports: [CourseDataComponent]
})
export class CourseDataModule { }
