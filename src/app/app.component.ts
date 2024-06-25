import { Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  isVisible = false
  router: Router = inject(Router);
  constructor(@Inject(AuthService) authService: AuthService) {
    authService.isAuthorized().subscribe((val) => {
      if (!val) {
        this.router.navigate(['login']);
      } else {
        this.router.navigate(['/courses']);
      }
    });
  }
}
