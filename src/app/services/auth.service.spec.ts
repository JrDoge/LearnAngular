import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should log in new user', () => {
    const spy = jest.spyOn(service, 'login');
    const login = 'JrDoge';
    const password = '240399Saw';
    service.login(login, password);
    expect(spy).toHaveBeenCalled();
    expect(service.login).toBeTruthy();
  });
});
