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
  showLoader = false;
  disabled = false;
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  logining() {
    this.showLoader = true;
    this.disabled = true;
    const message$ = this.authService.login(
      this.enteredLogin,
      this.enteredPass
    );
    message$.subscribe({
      next: () => {
        this.showLoader = false;
        this.disabled = false;
        this.router.navigate(['/courses']);
      },
      error: () => {
        this.showLoader = false;
        this.disabled = false;
      },
    });
  }
}
