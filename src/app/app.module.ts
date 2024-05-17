import { TuiRootModule } from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SimpleHeaderModule } from './components/simple-header/simple-header.module';
import { SimpleFooterModule } from './components/simple-footer/simple-footer.module';
import { SearchSectionModule } from './components/search-section/search-section.module';
import { CourseListModule } from './components/course-list/course-list.module';
import { CourseDataModule } from './components/course-data/course-data.module';
import { FilterModule } from './pipes/filter.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    SimpleFooterModule,
    BrowserModule,
    SimpleHeaderModule,
    BrowserAnimationsModule,
    TuiRootModule,
    SearchSectionModule,
    CourseListModule,
    CourseDataModule,
    FilterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
