import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.less',
})
export class CoursesPageComponent {
  searchRequest!: string;
  service = inject(AuthService);

  isAuthorized(): boolean {
    return this.service.isAuthorized();
  }

  searchCourse(searchRequest: string) {
    this.searchRequest = searchRequest;
  }
}
