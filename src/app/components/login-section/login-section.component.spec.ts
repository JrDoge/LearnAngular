import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { LoginSectionComponent } from './login-section.component';

describe('LoginSectionComponent', () => {
  let component: LoginSectionComponent;
  let fixture: ComponentFixture<LoginSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
