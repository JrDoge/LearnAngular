import { Component, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrl: './courses-page.component.less',
})
export class CoursesPageComponent {
  searchRequest!: string;
  constructor(@Inject(AuthService) private readonly authService: AuthService) {}

  isAuthorized(): boolean {
    return this.authService.isAuthorized();
  }

  searchCourse(searchRequest: string) {
    this.searchRequest = searchRequest;
  }
}
