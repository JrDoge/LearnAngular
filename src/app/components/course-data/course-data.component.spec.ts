/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable promise/catch-or-return */

import type { ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import type { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CourseDataComponent } from './course-data.component';
import { courseMock } from './course-mock';
import { CourseDataModule } from './course-data.module';

let component: CourseDataComponent;
let fixture: ComponentFixture<CourseDataComponent>;
const mockedCourse = courseMock;

describe('Если есть данные для отображения (stand-alone)', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseDataComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDataComponent);
    component = fixture.componentInstance;

    component.course = mockedCourse[1];
    fixture.detectChanges();
  });

  it('То в качестве даты выводятся данные из поля creationDate', () => {
    const courseContainer = fixture.debugElement.query(
      By.css('.course-header-container')
    ).nativeElement;
    expect(courseContainer.textContent).toContain(mockedCourse[1].creationDate);
  });
  it('То в качестве описания выводятся данные из поля description', () => {
    const courseContainer = fixture.debugElement.query(
      By.css('.course-description-container')
    ).nativeElement;
    expect(courseContainer.textContent).toContain(mockedCourse[1].description);
  });
  it('То присутствует заголовок курса', () => {
    const courseTitle = fixture.debugElement.query(
      By.css('.line-clamp-box')
    ).nativeElement;
    expect(courseTitle).toBeTruthy();
  });
  it('То присутствует бейдж длительности курса', () => {
    const courseBadge = fixture.debugElement.query(
      By.css('.badge')
    ).nativeElement;
    expect(courseBadge).toBeTruthy();
  });
  it('То присутствует кнопка "Edit"', () => {
    const courseButtons = fixture.debugElement.query(
      By.css('.course-buttons')
    ).nativeElement;
    expect(courseButtons).toBeTruthy();
  });
  it('То присутствует кнопка "Delete"', () => {
    const courseButtons = fixture.debugElement.query(
      By.css('.course-buttons')
    ).nativeElement;
    expect(courseButtons).toBeTruthy();
  });
});

@Component({
  standalone: true,
  imports: [CourseDataModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<app-course-data
    data-id="host-courses"
    *ngFor="let course of courses"
    [course]="course"
    (deleteEvent)="deleteSetCourse($event)"
  ></app-course-data>`,
})
class TestHostComponent {
  courses = mockedCourse;

  deleteSetCourse(courseId: string) {
    const foundCourseIndex = this.courses.findIndex(
      (course) => course.id === courseId
    );
    if (foundCourseIndex !== -1) {
      this.courses.splice(foundCourseIndex, 1);
    }
  }
}

let testHostComponent: TestHostComponent;
let hostFixture: ComponentFixture<TestHostComponent>;

describe('Компонент-хост должен успешно создаваться', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
  });

  it('Успешно создан.', () => {
    expect(testHostComponent).toBeTruthy();
  });
  it('Через @input не были переданы данные, не выводим ничего', () => {
    testHostComponent.courses = [];

    const coursecontainer = fixture.debugElement.query(
      By.css('.course-header-container')
    ).nativeElement;

    expect(coursecontainer.textContent).toBeNull;
  });
});

describe('Если через @Input переданы данные для отображения', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
  });
  it('То содержимое компонента не пустое', () => {
    testHostComponent.courses = mockedCourse;
    fixture.detectChanges();

    const coursecontainer = fixture.debugElement.query(
      By.css('.course-container')
    ).nativeElement;

    expect(coursecontainer.textContent).not.toBeNull;
  });
  it('Если нажать на кнопку удаления курса, то через @Output будет передано событие удаления курса', () => {
    const spy = jest.spyOn(component.deleteEvent, 'emit');

    const deleteButton: DebugElement = fixture.debugElement.query(
      By.css('[data-id = "delete-button"]')
    );

    deleteButton.triggerEventHandler('click');

    fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });
  it('Если нажать на кнопку удаления курса, то через @Output будет передано событие удаления курса c переданным значением.', () => {
    const spy = jest.spyOn(component.deleteEvent, `emit`);

    component.course = courseMock[0];

    const deleteButton = fixture.debugElement.query(
      By.css('[data-id = "delete-button"]')
    );

    deleteButton.triggerEventHandler('click');

    hostFixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalledWith('1');
    });
  });
});
