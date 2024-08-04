import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  TuiFieldErrorPipeModule,
  TuiInputModule,
  TuiInputPasswordModule,
} from '@taiga-ui/kit';
import { TuiButtonModule, TuiErrorModule } from '@taiga-ui/core';
import { RouterLink, provideRouter } from '@angular/router';
import { LoginSectionComponent } from './login-section.component';
import { AuthService } from '../../services/auth.service';
import { SimpleFooterModule } from '../simple-footer/simple-footer.module';
import { routes } from '../../app.routes';
import { LoaderModule } from '../loader/loader.module';

@NgModule({
  declarations: [LoginSectionComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    TuiFieldErrorPipeModule,
    TuiErrorModule,
    ReactiveFormsModule,
    SimpleFooterModule,
    RouterLink,
    LoaderModule,
  ],
  exports: [LoginSectionComponent],
  providers: [AuthService, provideRouter(routes)],
})
export class LoginSectionModule {}
