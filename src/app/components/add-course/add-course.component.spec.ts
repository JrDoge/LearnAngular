import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TuiFieldErrorPipeModule } from '@taiga-ui/kit';
import { AddCourseComponent } from './add-course.component';
import { CoursesService } from '../../services/courses.service';
import { DurationModule } from '../../pipes/duration.module';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddCourseComponent],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [TuiFieldErrorPipeModule, DurationModule],
      providers: [CoursesService, provideHttpClient()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('При нажатии на save вызываем сервис создания курса', async () => {
    const spy = jest.spyOn(component, 'saveCourse');

    const saveButton = fixture.debugElement.query(By.css('[data-id="save"]'));

    saveButton.triggerEventHandler('click');
    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
