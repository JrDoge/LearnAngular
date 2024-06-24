import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { find, interval, map, take } from 'rxjs';
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
    const user$ = interval(1000).pipe(
      take(users.length),
      find((v) => users[v].login === login && users[v].password === password),
      map((val) => {
        if (val === undefined) {
          throw new Error('Wrong login or password try again!');
        }
        return users[val];
      })
    );
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
