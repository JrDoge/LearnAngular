import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import type { User } from '../user-info';
import { Users } from './user-mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(login: string, password: string) {
    const result = this.logining(login, password);
    console.log(result);
    return result.message;
  }

  logining(login: string, password: string, users: User[] = Users) {
    let getUser!: User;
    let message!: string;
    const users$: Observable<User> = new Observable((observer) => {
      observer.error(
        users.find((user) => user.login !== login && user.password !== password)
      );
      observer.next(
        users.find((user) => user.login === login && user.password === password)
      );
    });
    users$.subscribe({
      next: (user) => {
        message = 'Logged in succesfully';
        getUser = user;
      },
      error: (user) => {
        message = 'Wrong login or password try again!';
        getUser = user;
      },
    });
    timer(5000).subscribe(users$);
    return { message, getUser };
  }

  setUserInStorage(name: string, token: string) {
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
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
