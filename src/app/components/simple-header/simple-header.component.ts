import { Component, Inject } from '@angular/core';
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
  userName!: string | null;
  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(Router) private readonly router: Router
  ) {
    authService.getUserInfo().subscribe({
      next: (val) => {
        this.userName = val;
      },
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
