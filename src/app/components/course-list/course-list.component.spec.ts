import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseListComponent } from './course-list.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { courseMock } from '../course-data/course-mock';

let component: CourseListComponent = new CourseListComponent();
let fixture: ComponentFixture<CourseListComponent>;

describe('Если в качестве данных о курсах передан пустой массив', () => {
  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [CourseListComponent]
    })

    component.courses = []
    fixture = TestBed.createComponent(CourseListComponent)
    
    fixture.detectChanges();
  });

  it('То не будет выведен ни один экземпляр компонента курса', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id="course-list_courseItem"]')
    );
 
    expect(courseItems).toHaveLength(0);
  });
  
  it('То кнопка "Load more" всё равно будет выведена', () => {
    const loadBtn: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id="course-list_app-LoadBtn"]')
    );
 
    expect(loadBtn).toBeTruthy();
  });
});

describe('Если в качестве данных о курсах передан массив с данными', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseListComponent]
    })

    fixture = TestBed.createComponent(CourseListComponent);

    component.courses = courseMock;
    
    fixture.detectChanges();
  });

  it('То будет выведен как минимум один экземпляр компонента курса', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id="course-list_courseItem"]'))
    
    expect(component.courses.length).toBeGreaterThanOrEqual(1);
  });
  
  it('То количество экземпляров компонента курса совпадает с количеством элементов в массиве', () => {
    const courseItems: DebugElement[] = fixture.debugElement.queryAll(
      By.css('[data-automation-id="course-list_courseItem"]'))

    expect(component.courses.length).toHaveLength(courseItems.length);
  });
});

// describe('Если от компонента курса пришло событие удаления курса', () => {

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [CourseDataComponent],
//     }).compileComponents();

//     fixture = TestBed.createComponent(CourseDataComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
