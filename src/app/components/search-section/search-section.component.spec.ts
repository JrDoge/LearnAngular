import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, type DebugElement } from '@angular/core';
import { SearchSectionComponent } from './search-section.component';

let component: SearchSectionComponent = new SearchSectionComponent();
let fixture: ComponentFixture<SearchSectionComponent>;

describe('Если нажать на кнопку поиска', () => {
  const searchCourseMethod = 'startSearching';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;

    component.searchRequest = '54354353455345';
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод поиска курсов ', async () => {
    const searchButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "search-button"]')
    );

    const spy = jest.spyOn(component, searchCourseMethod);

    searchButton.triggerEventHandler(`click`);

    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  it('То один раз будет вызван метод поиска курсов c stringTest', async () => {
    const searchButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "search-button"]')
    );

    const spy = jest.spyOn(component.searchEvent, 'emit');

    searchButton.triggerEventHandler(`click`);

    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith('54354353455345');
    });
  });
});
