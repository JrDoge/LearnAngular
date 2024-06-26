import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.less',
})
export class CoursesPageComponent {
  searchRequest!: string;
  searchCourse(searchRequest: string) {
    this.searchRequest = searchRequest;
  }
}