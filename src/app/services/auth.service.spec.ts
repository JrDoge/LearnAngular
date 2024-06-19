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
  });
  it('should return is user authorized', () => {
    const spy = jest.spyOn(service, 'isAuthorized');
    service.isAuthorized();
    expect(spy).toHaveBeenCalled();
  });
  it('should log out curent user', () => {
    const spy = jest.spyOn(service, 'logout');
    service.logout();
    expect(spy).toHaveBeenCalled();
  });
  it('should load user info', () => {
    const spy = jest.spyOn(service, 'getUserInfo');
    service.getUserInfo();
    expect(spy).toHaveBeenCalled();
  });
});

describe('AuthService test rxjs', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });
  it('test stream', () => {
    const test = {
      login: 'JrDoge',
      password: '240399Sa',
    };
    service.logining(test.login, test.password);
  });
});
