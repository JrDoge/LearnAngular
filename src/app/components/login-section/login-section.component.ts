import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginSectionComponent {
  logoSrc = './assets/svgs/Logo.svg';

  enteredLogin = new FormControl('JrDoge', { nonNullable: true });
  enteredPass = new FormControl('240399Saw', { nonNullable: true });

  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(Router) private readonly router: Router
  ) {}

  logining() {
    this.authService.login(this.enteredLogin.value, this.enteredPass.value);
  }
}
