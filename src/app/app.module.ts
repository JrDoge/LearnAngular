import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListSectionComponent } from './components/course-list-section.component';
import { FooterSectionComponent } from './components/footer-section.component';
import { HeaderSectionComponent } from './components/header-section.component';
import { SearchSectionComponent } from './components/search-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListSectionComponent,
    FooterSectionComponent,
    HeaderSectionComponent,
    SearchSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent, CourseListSectionComponent],
})
export class AppModule {}
