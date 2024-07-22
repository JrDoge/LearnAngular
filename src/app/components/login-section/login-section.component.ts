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

  router: Router = inject(Router);
  showLoader!: boolean;
  disabled!: boolean;
  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(LoaderService) private readonly loaderService: LoaderService
  ) {}

  logining() {
    this.showLoader = true;
    this.disabled = true;
    const message$ = this.authService.login(
      this.enteredLogin,
      this.enteredPass
    );
    this.loaderService.showLoader();
    message$.subscribe({
      next: () => {
        this.showLoader = false;
        this.disabled = false;
        this.loaderService.hideLoader();
        this.router.navigate(['/courses']);
      },
      error: () => {
        this.loaderService.hideLoader();
        this.showLoader = false;
        this.disabled = false;
      },
    });
  }
}
