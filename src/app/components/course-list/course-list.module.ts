import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadgeModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
import { CourseListComponent } from './course-list.component';
import { CourseDataModule } from '../course-data/course-data.module';
import {TuiBlockStatusModule} from '@taiga-ui/layout';

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    TuiLineClampModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
    CourseDataModule,
    TuiBlockStatusModule,
  ],
  exports: [CourseListComponent],
})
export class CourseListModule {}
