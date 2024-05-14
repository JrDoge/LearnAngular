<<<<<<< HEAD
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA, type DebugElement } from '@angular/core';
import { SearchSectionComponent } from './search-section.component';

let component: SearchSectionComponent = new SearchSectionComponent();
=======
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable promise/catch-or-return */
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import type { DebugElement } from '@angular/core';
import { SearchSectionComponent } from './search-section.component';

const component: SearchSectionComponent = new SearchSectionComponent();
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
let fixture: ComponentFixture<SearchSectionComponent>;

describe('Если нажать на кнопку поиска', () => {
  const searchCourseMethod = 'startSearching';

  beforeEach(async () => {
<<<<<<< HEAD
    TestBed.configureTestingModule({
      declarations: [SearchSectionComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(SearchSectionComponent);
    component = fixture.componentInstance;

    component.searchResult = '54354353455345';
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод поиска курсов ', async () => {
=======
    fixture = TestBed.createComponent(SearchSectionComponent);
  });

  const stringForTest = '54354353453';

  it('То один раз будет вызван метод поиска курсов ', () => {
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    const searchButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "search-button"]')
    );

    const spy = jest.spyOn(component, searchCourseMethod);

<<<<<<< HEAD
    searchButton.triggerEventHandler(`click`);

    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  it('То один раз будет вызван метод поиска курсов c stringTest', async () => {
=======
    searchButton.triggerEventHandler(`click(${stringForTest})`);

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  it('То один раз будет вызван метод поиска курсов c stringTest', () => {
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    const searchButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "search-button"]')
    );

<<<<<<< HEAD
    const spy = jest.spyOn(component.searchEvent, 'emit');

    searchButton.triggerEventHandler(`click`);

    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith('54354353455345');
=======
    const spy = jest.spyOn(component, searchCourseMethod);

    searchButton.triggerEventHandler(`click(${stringForTest})`);

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith(stringForTest);
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    });
  });
});
