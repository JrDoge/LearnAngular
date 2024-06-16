import { Injectable } from '@angular/core';
import { User } from '../user-info';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(login: string, password: string) {
    const me = new User('Konstantin Rogov', 'JrDoge', '240399Saw');
    if (
      (login !== me.login && password !== me.password) ||
      login !== me.login ||
      password !== me.password
    ) {
      throw new Error('Wrong login or password try again');
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
