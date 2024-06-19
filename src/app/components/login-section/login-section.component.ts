import { Component, Inject, inject } from '@angular/core';
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

  router: Router = inject(Router);
  showLoader!: boolean;
  disabled!: boolean;
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  logining() {
    this.showLoader = true;
    this.disabled = true;
    const message = this.authService.login(this.enteredLogin, this.enteredPass);
    const isAuthorised = this.authService.isAuthorized();
    if (!isAuthorised) {
      this.showLoader = false;
      this.disabled = false;
      return console.error('Error:', message);
    }
    console.log(message);
    return this.router.navigate(['/courses']);
  }
}
