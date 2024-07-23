import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.less',
})
export class LoginSectionComponent {
  logoSrc = './assets/svgs/Logo.svg';

  enteredLogin = '';
  enteredPass = '';

  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(LoaderService) private readonly loaderService: LoaderService,
    @Inject(Router) private readonly router: Router
  ) {}

  logining() {
    const message$ = this.authService.login(
      this.enteredLogin,
      this.enteredPass
    );
    this.loaderService.showLoader();
    message$.subscribe({
      next: () => {
        this.loaderService.hideLoader();
        this.router.navigate(['/courses']);
      },
      error: () => {
        this.loaderService.hideLoader();
      },
    });
  }
}
