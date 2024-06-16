import type { Routes } from '@angular/router';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

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
];
