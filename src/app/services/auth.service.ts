import { Injectable } from '@angular/core';
import type { User } from '../user-info';
import { Users } from './user-mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(login: string, password: string) {
    const users: User[] = Users;
    const getUser = users.find(
      (user) => user.login === login && user.password === password
    );
    if (getUser === undefined) {
      const message = new Error('Wrong login or password try again');
      return message;
    }
    localStorage.setItem('name', getUser.name);
    localStorage.setItem('token', getUser.token);
    const message = 'Logged in successfully';
    return message;
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
