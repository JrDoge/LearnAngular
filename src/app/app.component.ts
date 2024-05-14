import { Component } from '@angular/core';
<<<<<<< HEAD
import { FilterPipe } from './pipes/filter.pipe';
import { courseMock } from './components/course-data/course-mock';
import type { CourseData } from './course-data';
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
<<<<<<< HEAD
export class AppComponent {
  searchingResult!: CourseData[];

  searchCourse(searchResult: string): CourseData[] {
    const pipe = new FilterPipe();
    this.searchingResult = pipe.transform(searchResult, courseMock);
    return this.searchingResult;
  }
}
=======
export class AppComponent {}
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
