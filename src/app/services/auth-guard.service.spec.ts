import { TestBed } from '@angular/core/testing';

import { provideHttpClient } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  TestBed.configureTestingModule({
    providers: [provideHttpClient()]
  }).compileComponents();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
