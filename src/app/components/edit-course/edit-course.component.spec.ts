import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { find, from } from 'rxjs';
import { By } from '@angular/platform-browser';

import { provideRouter, Router } from '@angular/router';
import { EditCourseComponent } from './edit-course.component';
import { CoursesService } from '../../services/courses.service';
import { courseMock } from '../course-data/course-mock';

import { DurationModule } from '../../pipes/duration.module';
import { routes } from '../../app.routes';

describe('EditCourseComponent', () => {
  let component: EditCourseComponent;
  let fixture: ComponentFixture<EditCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditCourseComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [DurationModule],
      providers: [
        CoursesService,
        provideHttpClient(),
        provideRouter(routes),
        Router,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(EditCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Отрисовываем компонент и смотрим на одно из полей', () => {
    const element = fixture.debugElement.query(
      By.css('[data-automation-id="title"]')
    ).nativeElement;
    fixture.detectChanges();
    from(courseMock)
      .pipe(find((course) => course.id === '4'))
      .subscribe((course) => {
        component.title = course!.title;
        element.textContent = component.title;
      });

    expect(element.textContent).toEqual('video course 3');
  });

  it('При нажатии на save вызываем сервис редактирования курса', async () => {
    const spy = jest.spyOn(component, 'saveCourse');

    const saveButton = fixture.debugElement.query(By.css('[data-id="save"]'));

    saveButton.triggerEventHandler('click');
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
