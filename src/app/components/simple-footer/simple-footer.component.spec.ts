import type { ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';

import { SimpleFooterComponent } from './simple-footer.component';

describe('SimpleFooterComponent', () => {
  let component: SimpleFooterComponent;
  let fixture: ComponentFixture<SimpleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SimpleFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
