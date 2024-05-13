import { Component } from '@angular/core';
import { FilterPipe } from './pipes/filter.pipe';
import { courseMock } from './components/course-data/course-mock';
import type { CourseData } from './course-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {

  searchingResult!: CourseData[]
  
  searchCourse(searchResult: string): CourseData[]{
    const pipe = new FilterPipe()
    this.searchingResult = pipe.transform(searchResult, courseMock)
    return this.searchingResult
  }
}
