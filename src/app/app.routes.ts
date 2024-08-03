import type { Routes } from '@angular/router';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';
import { AddCourseComponent } from './components/add-course/add-course.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: 'courses',
    title: 'Courses Page',
    component: CoursesPageComponent,
    canActivate: [AuthGuardService],
  },
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  {
    path: 'login',
    title: 'Login page',
    component: LoginSectionComponent,
  },
  {
    path: 'courses/new',
    title: 'Add Course Page',
    canActivate: [AuthGuardService],
    component: AddCourseComponent,
  },
  {
    path: 'courses/:id',
    title: 'Edit Course',
    canActivate: [AuthGuardService],
    component: EditCourseComponent,
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
];
