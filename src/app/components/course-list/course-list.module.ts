import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiBadgeModule, TuiLineClampModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core';
<<<<<<< HEAD
import { TuiBlockStatusModule } from '@taiga-ui/layout';
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
import { CourseListComponent } from './course-list.component';
import { CourseDataModule } from '../course-data/course-data.module';

@NgModule({
  declarations: [CourseListComponent],
  imports: [
    CommonModule,
    TuiLineClampModule,
    TuiButtonModule,
    TuiSvgModule,
    TuiBadgeModule,
    CourseDataModule,
<<<<<<< HEAD
    TuiBlockStatusModule,
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  ],
  exports: [CourseListComponent],
})
export class CourseListModule {}
