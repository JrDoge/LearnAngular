import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { map, of, switchMap } from 'rxjs';
import { SearchSectionComponent } from './search-section.component';
import { LoaderService } from '../../services/loader.service';
import { CoursesService } from '../../services/courses.service';
import { courseMock } from '../../mocks/course-mock';

let component: SearchSectionComponent;
let fixture: ComponentFixture<SearchSectionComponent>;

describe('Если нажать на кнопку поиска', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [HttpClientTestingModule],
      providers: [TuiDestroyService, LoaderService, CoursesService],
    });

    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод поиска курсов c stringTest', async () => {
    component.search.valueChanges
      .pipe(
        switchMap(() => of(courseMock)),
        map((val) =>
          val.filter((course) => course.title.includes('54354353455345'))
        )
      )
      .subscribe((val) => expect(val).toHaveLength(0));
  });
});
