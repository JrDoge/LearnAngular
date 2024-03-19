import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListSectionComponent } from './components/course-list-section.component';

@NgModule({
  declarations: [AppComponent, CourseListSectionComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, CourseListSectionComponent],
})
export class AppModule {}
