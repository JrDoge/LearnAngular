import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideRouter, RouterOutlet } from '@angular/router';
import {
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './components/courses-page/courses-page.module';
import { LoaderModule } from './components/loader/loader.module';
import { authInterceptor } from './services/auth-interceptor';
import { routes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoursesPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    RouterOutlet,
    LoaderModule,
    HttpClientModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    provideRouter(routes),
  ],
})
export class AppModule {}
