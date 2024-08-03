import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, type DebugElement } from '@angular/core';
import { TuiDestroyService } from '@taiga-ui/cdk';
import { SearchSectionComponent } from './search-section.component';
import { LoaderService } from '../../services/loader.service';
import { CoursesService } from '../../services/courses.service';

let component: SearchSectionComponent;
let fixture: ComponentFixture<SearchSectionComponent>;

describe('Если нажать на кнопку поиска', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [TuiDestroyService, LoaderService, CoursesService],
    });

    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод поиска курсов c stringTest', async () => {
    const inputEvent: DebugElement = fixture.debugElement.query(
      By.css('.input')
    );

    component.search.setValue('54354353455345')

    inputEvent.triggerEventHandler(`input`);

    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith('54354353455345');
    });
  });
});
