<<<<<<< HEAD
=======
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable promise/catch-or-return */

>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import type { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseListComponent } from './course-list.component';
import { courseMock } from '../course-data/course-mock';

<<<<<<< HEAD
let component: CourseListComponent;
=======
let component: CourseListComponent = new CourseListComponent();
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
let fixture: ComponentFixture<CourseListComponent>;

describe('Если в качестве данных о курсах передан пустой массив', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.courses = [];
    fixture.detectChanges();
  });

  it('То не будет выведен ни один экземпляр компонента курса', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id = "course-item"]')
    );
    const needToShow: boolean = courseItems.length > 1;
    expect(needToShow).toBeFalsy();
  });

  it('То кнопка "Load more" всё равно будет выведена', () => {
    const loadBtn: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id = "load-button"]')
    );

    expect(loadBtn).toBeTruthy();
  });
<<<<<<< HEAD

  afterEach(() => {
    jest.clearAllMocks();
  });
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
});

describe('Если в качестве данных о курсах передан массив с данными', () => {
  beforeEach(async () => {
<<<<<<< HEAD
    await TestBed.configureTestingModule({
=======
    TestBed.configureTestingModule({
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

<<<<<<< HEAD
    component.courses = courseMock;
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    fixture.detectChanges();
  });

  it('То будет выведен как минимум один экземпляр компонента курса', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id = "course-item"]')
    );

    expect(courseItems.length).toBeGreaterThanOrEqual(1);
  });

  it('То количество экземпляров компонента курса совпадает с количеством элементов в массиве', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id = "course-item"]')
    );
    expect(courseItems).toHaveLength(courseMock.length);
  });
});

describe('Если от компонента курса пришло событие удаления курса', () => {
  const deleteCourseMethod = 'deleteSetCourse';

  beforeEach(async () => {
<<<<<<< HEAD
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;

    component.courses = courseMock;
    fixture.detectChanges();
=======
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
    });
    fixture = TestBed.createComponent(CourseListComponent);
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  });

  it('То один раз будет вызван метод удаления курса', () => {
    const spy = jest.spyOn(component, deleteCourseMethod);

<<<<<<< HEAD
    component.deleteSetCourse(component.courses[0]);
=======
    component.deleteSetCourse('5');
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('То метод удаления курса был вызван с аргументом - id курса ', () => {
<<<<<<< HEAD
    const selectedCourse = component.courses[0];

    const spy = jest.spyOn(component, deleteCourseMethod);

    component.deleteSetCourse(selectedCourse);

    expect(spy).toHaveBeenCalledWith(selectedCourse);
=======
    const spy = jest.spyOn(component, deleteCourseMethod);

    component.deleteSetCourse('5');

    expect(spy).toHaveBeenLastCalledWith('5');
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  });
});

describe('Если нажать на кнопку "Load more"', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(CourseListComponent);
<<<<<<< HEAD
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('То один раз будет вызван метод дозагрузки курсов', async () => {
=======
  });

  it('То один раз будет вызван метод дозагрузки курсов', () => {
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    const spy = jest.spyOn(component, 'loadNewCourses');

    const loadButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "load-button"]')
    );

    loadButton.triggerEventHandler('click');

<<<<<<< HEAD
    await fixture.whenStable().then(() => {
=======
    fixture.whenStable().then(() => {
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
