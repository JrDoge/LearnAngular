import { Component, Inject } from '@angular/core';
import {
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  map,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { LoaderService } from '../../services/loader.service';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
  searchRequest = '';
  searchHint = 'Name, fragment or date';
  constructor(
    @Inject(TuiDestroyService) private readonly destroy$: TuiDestroyService,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(CoursesService) private readonly courseService: CoursesService
  ) {}

  ngOnInit(): void {
    const input = document.getElementById('searchSection') as HTMLInputElement;

    fromEvent(input, 'keyup')
      .pipe(
        takeUntil(this.destroy$),
        map(() => input.value),
        debounceTime(1000),
        distinctUntilChanged(),
        filter((v) => v.length >= 3),
        switchMap((v) => this.courseService.loadCourses$(v)),
        tap(() => this.loader.showLoader()),
        delay(1000)
      )
      .subscribe(() => this.loader.hideLoader());
  }
}
