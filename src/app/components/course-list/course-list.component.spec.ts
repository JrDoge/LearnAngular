import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { courseMock } from '../course-data/course-mock';

let component: CourseListComponent = new CourseListComponent();
let fixture: ComponentFixture<CourseListComponent>;

describe('Если в качестве данных о курсах передан пустой массив', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent)
    component = fixture.componentInstance;
    component.courses = [];
    fixture.detectChanges();
  });

  it('То не будет выведен ни один экземпляр компонента курса', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('app-course-data[data-automation-id]')
    );
    const needToShow: boolean = courseItems.length > 1 ? true : false
    expect(needToShow).toBeFalsy();
  });
  
  it('То кнопка "Load more" всё равно будет выведена', () => {
    const loadBtn: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id="course-list_load-button"]')
    );
 
    expect(loadBtn).toBeTruthy();
  });
});

describe('Если в качестве данных о курсах передан массив с данными', () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseListComponent)
    component = fixture.componentInstance

    fixture.detectChanges();
  });

  it('То будет выведен как минимум один экземпляр компонента курса', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('app-course-data[data-automation-id]'))

    expect(courseItems.length).toBeGreaterThanOrEqual(1);
  });
  
  it('То количество экземпляров компонента курса совпадает с количеством элементов в массиве', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('app-course-data[data-automation-id]'))
    expect(courseItems).toHaveLength(courseMock.length);
  });
});

describe('Если от компонента курса пришло событие удаления курса', () => {
  const deleteCourseMethod = 'deleteSetCourse'

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent]
    })
    jest.spyOn(component, deleteCourseMethod)

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('То один раз будет вызван метод удаления курса', () => {
    // const deleteButton: DebugElement = fixture.debugElement.query(
    //   By.css('')
    // )
    expect(component).toBeTruthy();
  });
});

describe('Если нажать на кнопку "Load more"', () => {

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })

    fixture = TestBed.createComponent(CourseListComponent)
  });

  it('То один раз будет вызван метод дозагрузки курсов', () => {
    
    const spy = jest.spyOn(component, 'loadNewCourses')

    const loadButton: DebugElement = fixture.debugElement.query(
      By.css('button[data-automation-id]')
    )
    loadButton.triggerEventHandler('click', loadButton);
    expect(spy).toHaveBeenCalled();
  });
});
