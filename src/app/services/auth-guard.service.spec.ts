import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { AuthGuardService } from './auth-guard.service';

describe('AuthGuardService', () => {
  let service: AuthGuardService;
  TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [provideHttpClientTesting()],
  }).compileComponents();

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGuardService);
  });

  it('Если авторизован выводит true', () => {
    service.canActivate().subscribe((val) => expect(val).toBeTruthy());
  });
});
