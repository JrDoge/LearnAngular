/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable promise/catch-or-return */
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import type { DebugElement } from '@angular/core';
import { SearchSectionComponent } from './search-section.component';

const component: SearchSectionComponent = new SearchSectionComponent();
let fixture: ComponentFixture<SearchSectionComponent>;

describe('Если нажать на кнопку поиска', () => {
  const searchCourseMethod = 'startSearching';

  beforeEach(async () => {
    fixture = TestBed.createComponent(SearchSectionComponent);
  });

  const stringForTest = '54354353453';

  it('То один раз будет вызван метод поиска курсов ', () => {
    const searchButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "search-button"]')
    );

    const spy = jest.spyOn(component, searchCourseMethod);

    searchButton.triggerEventHandler(`click(${stringForTest})`);

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  it('То один раз будет вызван метод поиска курсов c stringTest', () => {
    const searchButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "search-button"]')
    );

    const spy = jest.spyOn(component, searchCourseMethod);

    searchButton.triggerEventHandler(`click(${stringForTest})`);

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith(stringForTest);
    });
  });
});
