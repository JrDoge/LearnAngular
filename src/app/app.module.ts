import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { CoursesPageModule } from './components/courses-page/courses-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoursesPageModule,
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    RouterOutlet,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
