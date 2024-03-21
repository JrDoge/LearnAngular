import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { SimpleFooterComponent } from './components/simple-footer/simple-footer.component';
import { SimpleHeaderComponent } from './components/simple-header/simple-header.component';
import { SearchSectionComponent } from './components/search-section/search-section.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    SimpleFooterComponent,
    SimpleHeaderComponent,
    SearchSectionComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
