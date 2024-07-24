import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import type { DebugElement } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { CourseListComponent } from './course-list.component';
import { CoursesService } from '../../services/courses.service';

let component: CourseListComponent;
let fixture: ComponentFixture<CourseListComponent>;

describe('Если в качестве данных о курсах передан пустой массив', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
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

  afterEach(() => {
    jest.clearAllMocks();
  });
});

describe('Если от компонента курса пришло событие удаления курса', () => {
  const deleteCourseMethod = 'deleteSetCourse';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [CoursesService],
    }).compileComponents();
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод удаления курса', () => {
    const spy = jest.spyOn(component, deleteCourseMethod);

    component.deleteSetCourse('1');

    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('Если нажать на кнопку "Load more"', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [CoursesService],
    });

    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    component.notFound = false;
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод дозагрузки курсов', async () => {
    const spy = jest.spyOn(component, 'loadNewCourses');

    const loadButton: DebugElement = fixture.debugElement.query(
      By.css('[data-automation-id = "load-button"]')
    );

    loadButton.triggerEventHandler('click');

    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
});
