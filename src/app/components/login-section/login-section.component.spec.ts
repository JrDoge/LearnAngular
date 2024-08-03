import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { LoginSectionComponent } from './login-section.component';

describe('LoginSectionComponent', () => {
  let component: LoginSectionComponent;
  let fixture: ComponentFixture<LoginSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSectionComponent],
      providers: [provideHttpClient()],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('При нажатии на кнопку логин будет вызван метод', async () => {
    const spy = jest.spyOn(component, 'logining');

    const loginButton = fixture.debugElement.query(By.css('[data-id="login"]'));

    loginButton.triggerEventHandler('click');

    fixture.detectChanges();
    await fixture.whenStable().then(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
