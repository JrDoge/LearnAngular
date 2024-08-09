import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
  takeUntil,
} from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LoaderService } from '../../services/loader.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchSectionComponent {
  searchHint = 'Name, fragment or date';
  search = new FormControl('', { nonNullable: true });

  constructor(
    @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(CoursesService) private readonly courseService: CoursesService,
    @Inject(Router) private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.search.valueChanges
      .pipe(
        takeUntil(this.destroy$),
        debounceTime(1000),
        distinctUntilChanged(),
        filter((v) => v.length >= 3),
        switchMap((v) => this.courseService.searchCourses(v))
      )
      .subscribe();
  }

  addCourse() {
    this.router.navigate(['/courses/new']);
  }
}
