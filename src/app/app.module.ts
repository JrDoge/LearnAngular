import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';
import {
  TuiRootModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiLinkModule,
  TuiSvgModule,
  TuiTextfieldControllerModule,
  TuiButtonModule,
} from '@taiga-ui/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TuiInputModule } from '@taiga-ui/kit';
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
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiLinkModule,
    TuiSvgModule,
    FormsModule,
    TuiInputModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
  ],
  providers: [
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
    { provide: TUI_SANITIZER, useClass: NgDompurifySanitizer },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
