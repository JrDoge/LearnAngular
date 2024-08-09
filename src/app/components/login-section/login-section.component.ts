import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';
import { AuthService } from '../../services/auth.service';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-login-section',
  templateUrl: './login-section.component.html',
  styleUrl: './login-section.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: TUI_VALIDATION_ERRORS,
      useValue: {
        required: 'This field must be filled!',
      },
    },
  ],
})
export class LoginSectionComponent {
  logoSrc = './assets/svgs/Logo.svg';

  authForm = new FormGroup({
    enteredLogin: new FormControl('', { nonNullable: true }),
    enteredPass: new FormControl('', { nonNullable: true }),
  });

  constructor(
    @Inject(AuthService) private readonly authService: AuthService,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(Router) private readonly router: Router
  ) {}

  logining() {
    const authInfo = this.authForm.getRawValue();
    this.authService.login(authInfo.enteredLogin, authInfo.enteredPass);
  }
}
