import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.less',
})
export class LoginSectionComponent {
  logoSrc = './assets/svgs/Logo.svg';

  enteredLogin = '';
  enteredPass = '';

  authService = inject(AuthService);

  router: Router = inject(Router);

  showLoader!: boolean;

  disabled!: boolean;

  logining() {
    this.showLoader = true;
    this.disabled = true;
    setTimeout(() => {
      this.authService.login(this.enteredLogin, this.enteredPass);
      const isAuthorised = this.authService.isAuthorized();
      console.log(isAuthorised);
      if (isAuthorised) {
        this.router.navigate(['/courses']);
        console.log('Logged in successfully');
      } else {
        console.log('tick');
        this.showLoader = false;
        this.disabled = false;
      }
    }, 5000);
  }
}
