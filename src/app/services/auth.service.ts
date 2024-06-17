import { Injectable } from '@angular/core';
import type { User } from '../user-info';
import { Users } from './user-mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(login: string, password: string) {
    const me: User = Users[0];
    if (
      (login !== me.login && password !== me.password) ||
      login !== me.login ||
      password !== me.password
    ) {
      console.error(new Error('Wrong login or password try again'));
      return;
    }
    localStorage.setItem('name', me.name);
    localStorage.setItem('token', me.token);
  }

  logout() {
    console.log('Logged out successfully');
    localStorage.clear();
  }

  isAuthorized(): boolean {
    let isAuthorised = false;
    const token = localStorage.getItem('token');
    const login = localStorage.getItem('name');
    if (token === null && login === null) {
      isAuthorised = false;
      return isAuthorised;
    }
    isAuthorised = true;
    return isAuthorised;
  }

  getUserInfo(): string | null {
    return localStorage.getItem('name');
  }
}
