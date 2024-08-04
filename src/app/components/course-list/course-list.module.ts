import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadgeModule, TuiLineClampModule } from '@taiga-ui/kit';
import {
  TuiButtonModule,
  TuiDialogService,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiBlockStatusModule } from '@taiga-ui/layout';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { RouterLink } from '@angular/router';
import { CourseListComponent } from './course-list.component';
import { CourseDataModule } from '../course-data/course-data.module';
import { FilterModule } from '../../pipes/filter.module';
import { CoursesService } from '../../services/courses.service';
import { SearchSectionModule } from '../search-section/search-section.module';

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
    SearchSectionModule,
    RouterLink,
  ],
  exports: [CourseListComponent],
  providers: [CoursesService, TuiDestroyService, TuiDialogService],
})
export class CourseListModule {}
