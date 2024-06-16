import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';
import { LoginSectionComponent } from './components/login-section/login-section.component';
import { CoursesPageComponent } from './components/courses-page/courses-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  authService = inject(AuthService);

  component: any = this.authService.isAuthorized()
    ? CoursesPageComponent
    : LoginSectionComponent;
}
