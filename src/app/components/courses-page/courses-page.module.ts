import { NgModule } from '@angular/core';

import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SimpleHeaderModule } from '../simple-header/simple-header.module';
import { SimpleFooterModule } from '../simple-footer/simple-footer.module';
import { SearchSectionModule } from '../search-section/search-section.module';
import { CourseListModule } from '../course-list/course-list.module';
import { CourseDataModule } from '../course-data/course-data.module';
import { FilterModule } from '../../pipes/filter.module';
import { CoursesPageComponent } from './courses-page.component';
import { LoginSectionModule } from '../login-section/login-section.module';
import { AddCourseModule } from '../add-course/add-course.module';
import { EditCourseModule } from '../edit-course/edit-course.module';

@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    SimpleHeaderModule,
    SearchSectionModule,
    SimpleFooterModule,
    CourseListModule,
    CourseDataModule,
    FilterModule,
    LoginSectionModule,
    RouterLink,
    CommonModule,
    AddCourseModule,
    EditCourseModule,
  ],
  exports: [CoursesPageComponent],
})
export class CoursesPageModule {}
