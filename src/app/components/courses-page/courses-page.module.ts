import { NgModule } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { SimpleHeaderModule } from '../simple-header/simple-header.module';
import { SimpleFooterModule } from '../simple-footer/simple-footer.module';
import { SearchSectionModule } from '../search-section/search-section.module';
import { CourseListModule } from '../course-list/course-list.module';
import { CourseDataModule } from '../course-data/course-data.module';
import { FilterModule } from '../../pipes/filter.module';
import { CoursesPageComponent } from './courses-page.component';
import { LoginSectionModule } from '../login-section/login-section.module';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

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
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  exports: [CoursesPageComponent],
  providers: [AuthService],
})
export class CoursesPageModule {}
