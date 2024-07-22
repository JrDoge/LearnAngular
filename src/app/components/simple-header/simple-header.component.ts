import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.less',
})
export class SimpleHeaderComponent {
  logoSrc = 'assets/svgs/Logo.svg';
  iconsSrc = ['assets/svgs/icon-16.svg', 'assets/svgs/Icon.svg'];
  router: Router = inject(Router);
  userName = this.authService.getUserInfo();
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
