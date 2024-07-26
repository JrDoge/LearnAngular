import type { Routes } from '@angular/router';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { AddCourseComponent } from './components/add-course/add-course.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login page',
    component: LoginSectionComponent,
  },
  {
    path: 'courses',
    title: 'Courses Page',
    component: CoursesPageComponent,
  },
  {
    path: 'courses/new',
    title: 'Add Course Page',
    component: AddCourseComponent,
  },
];
