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
import { provideRouter, RouterLink } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { CourseListComponent } from './course-list.component';
import { CourseDataModule } from '../course-data/course-data.module';
import { FilterModule } from '../../pipes/filter.module';
import { CoursesService } from '../../services/courses.service';
import { SearchSectionModule } from '../search-section/search-section.module';
import { routes } from '../../app.routes';
import { authInterceptor } from '../../services/auth-interceptor';

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
  providers: [
    CoursesService,
    TuiDestroyService,
    provideHttpClient(withInterceptors([authInterceptor])),
    TuiDialogService,
    provideRouter(routes),
  ],
})
export class CourseListModule {}
