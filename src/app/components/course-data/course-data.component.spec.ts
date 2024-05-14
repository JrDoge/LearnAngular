<<<<<<< HEAD
=======
/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable promise/catch-or-return */

>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
import type { ComponentFixture } from '@angular/core/testing';
import { ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import type { DebugElement } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CourseDataComponent } from './course-data.component';
import { courseMock } from './course-mock';
import { CourseDataModule } from './course-data.module';
<<<<<<< HEAD
import { DurationPipe } from '../../pipes/duration.pipe';
import type { CourseData } from '../../course-data';
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

let component: CourseDataComponent;
let fixture: ComponentFixture<CourseDataComponent>;
const mockedCourse = courseMock;

describe('Если есть данные для отображения (stand-alone)', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [CourseDataComponent, DurationPipe],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
=======
      declarations: [CourseDataComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDataComponent);
    component = fixture.componentInstance;

    component.course = mockedCourse[1];
<<<<<<< HEAD

    fixture.detectChanges();
  });

  it('То в качестве даты выводятся данные из поля creationDate в формате dd.MM.yyyy', () => {
    const courseContainer = fixture.debugElement.query(
      By.css('.course-header-container')
    ).nativeElement;

    expect(courseContainer.textContent).toMatch('01.05.2024');
=======
    fixture.detectChanges();
  });

  it('То в качестве даты выводятся данные из поля creationDate', () => {
    const courseContainer = fixture.debugElement.query(
      By.css('.course-header-container')
    ).nativeElement;
    expect(courseContainer.textContent).toContain(mockedCourse[1].creationDate);
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  });
  it('То в качестве описания выводятся данные из поля description', () => {
    const courseContainer = fixture.debugElement.query(
      By.css('.course-description-container')
    ).nativeElement;
    expect(courseContainer.textContent).toContain(mockedCourse[1].description);
  });
<<<<<<< HEAD
  it('Значение поля title пишется в TitleUpperCase', async () => {
    // const courseTitleContainer: HTMLElement = fixture.nativeElement;
    // const courseTitle = courseTitleContainer.getElementsByClassName('.title');
    // await fixture.whenStable().then( () => {
    //   console.log('show me something:', fixture.debugElement.query(By.css('ng-template')))
    // })
    // expect(courseTitle).toMatch('Video Course 2');
  });
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
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
<<<<<<< HEAD
  afterEach(() => {
    jest.clearAllMocks();
  });
=======
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
});

@Component({
  standalone: true,
  imports: [CourseDataModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `<app-course-data
    data-id="host-courses"
    [course]="course"
    (deleteEvent)="deleteSetCourse($event)"
  ></app-course-data>`,
})
<<<<<<< HEAD
export class TestHostComponent {
  mockCourse: CourseData[] = courseMock;

  course: CourseData = this.mockCourse[1];

  deleteSetCourse(selectedCourse: CourseData) {
    this.mockCourse.splice(1, 1);
=======
class TestHostComponent {
  courses = mockedCourse;

  deleteSetCourse(courseId: string) {
    const foundCourseIndex = this.courses.findIndex(
      (course) => course.id === courseId
    );
    if (foundCourseIndex !== -1) {
      this.courses.splice(foundCourseIndex, 1);
    }
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  }
}

let testHostComponent: TestHostComponent;
let hostFixture: ComponentFixture<TestHostComponent>;

describe('Компонент-хост должен успешно создаваться', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
<<<<<<< HEAD
    });
=======
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
  });

  it('Успешно создан.', () => {
    expect(testHostComponent).toBeTruthy();
  });
  it('Через @input не были переданы данные, не выводим ничего', () => {
<<<<<<< HEAD
    testHostComponent.mockCourse = [];
    fixture.detectChanges();
=======
    testHostComponent.courses = [];
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

    const coursecontainer = fixture.debugElement.query(
      By.css('.course-header-container')
    ).nativeElement;

<<<<<<< HEAD
    expect(coursecontainer.textContent).toBeNull();
=======
    expect(coursecontainer.textContent).toBeNull;
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  });
});

describe('Если через @Input переданы данные для отображения', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
<<<<<<< HEAD
      declarations: [CourseDataComponent],
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
  });

  it('То содержимое компонента не пустое', () => {
    testHostComponent.course = mockedCourse[1];
=======
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    }).compileComponents();
    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
  });
  it('То содержимое компонента не пустое', () => {
    testHostComponent.courses = mockedCourse;
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    fixture.detectChanges();

    const coursecontainer = fixture.debugElement.query(
      By.css('.course-container')
    ).nativeElement;

<<<<<<< HEAD
    expect(coursecontainer.textContent).not.toBeNull();
  });
});
describe('Если нажать на кнопку удаления курса', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [CourseDataComponent],
      imports: [TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    hostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = hostFixture.componentInstance;
    fixture = TestBed.createComponent(CourseDataComponent);
    component = fixture.componentInstance;
    component.course = mockedCourse[1];
    fixture.detectChanges();
    hostFixture.detectChanges();
  });

  it('То будет передано событие удаления курса через @Output', async () => {
    const spy = jest.spyOn(component.deleteEvent, 'emit');
    const hostSpy = jest.spyOn(testHostComponent, 'deleteSetCourse');
=======
    expect(coursecontainer.textContent).not.toBeNull;
  });
  it('Если нажать на кнопку удаления курса, то через @Output будет передано событие удаления курса', () => {
    const spy = jest.spyOn(component.deleteEvent, 'emit');
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

    const deleteButton: DebugElement = fixture.debugElement.query(
      By.css('[data-id = "delete-button"]')
    );

    deleteButton.triggerEventHandler('click');
<<<<<<< HEAD
    testHostComponent.deleteSetCourse(courseMock[1]);

    await fixture.whenStable().then(() => {
      expect(spy).toBe('deleteSetCourse');
      expect(hostSpy).toHaveBeenCalled();
=======

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
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
    });
  });
});
