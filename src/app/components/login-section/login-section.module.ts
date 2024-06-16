import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';
import { RouterLink, provideRouter } from '@angular/router';
import { LoginSectionComponent } from './login-section.component';
import { AuthService } from '../../services/auth.service';
import { SimpleFooterModule } from '../simple-footer/simple-footer.module';
import { routes } from '../../app.routes';

@NgModule({
  declarations: [LoginSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    ReactiveFormsModule,
    SimpleFooterModule,
    RouterLink,
  ],
  exports: [LoginSectionComponent],
  providers: [AuthService, provideRouter(routes)],
})
export class LoginSectionModule {}
