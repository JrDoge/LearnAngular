import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleHeaderComponent {
  service = inject(AuthService);
  userName = this.service.getUserInfo();
  logoSrc = 'assets/svgs/Logo.svg';
  iconsSrc = ['assets/svgs/icon-16.svg', 'assets/svgs/Icon.svg'];

  router: Router = inject(Router);

  logout() {
    this.service.logout();
    this.router.navigate(['']);
  }
}
