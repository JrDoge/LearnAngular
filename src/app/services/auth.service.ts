import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { delay, find, from, map, take } from 'rxjs';
import type { User } from '../user-info';
import { Users } from './user-mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(
    login: string,
    password: string,
    users: User[] = Users
  ): Observable<User> {
    const user$ = from(users).pipe(
      take(users.length),
      delay(1000),
      find(
        (v) =>
          v.login.toLowerCase() === login.toLowerCase() &&
          v.password === password
      ),
      map((val) => {
        if (val === undefined) {
          throw new Error('Wrong login or password try again!');
        }
        return val;
      })
    );
    user$.subscribe({
      next: (val) => {
        this.setUserInStorage(val.name, val.token);
      },
    });
    return user$;
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
