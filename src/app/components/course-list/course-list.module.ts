import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadgeModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiLoaderModule, TuiSvgModule } from '@taiga-ui/core';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { CourseListComponent } from './course-list.component';
import { CourseDataModule } from '../course-data/course-data.module';
import { FilterModule } from '../../pipes/filter.module';
import { CoursesService } from '../../services/courses.service';

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
    FilterModule,
    TuiLoaderModule,
  ],
  exports: [CourseListComponent],
  providers: [CoursesService],
})
export class CourseListModule {}
