import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { delay, from, of } from 'rxjs';
import { find, map, take } from 'rxjs';
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
    const user$ = from(Users).pipe(
      delay(1000),
      take(users.length),
      find(
        (v) =>
          v.login.toLowerCase() === login.toLowerCase() &&
          v.password === password
      ),
      map((val) => {
        if (val === undefined) {
          throw new Error('Wrong login or password try again');
        }
        return val;
        return val;
      })
    );
    user$.subscribe({
      next: (val) => {
        this.setUserInStorage(val.name, val.token);
      },
    });
    user$.subscribe({
      next: (val) => {
        this.setUserInStorage(val.name, val.token);
      },
    });
    return user$;
  }

  logout() {
    localStorage.clear();
  }

  isAuthorized$() {
    const userStorage = {
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token'),
    };
    return of(userStorage).pipe(
      find((user) => user.name !== null && user.token !== null)
    );
  }

  getUserInfo(): Observable<string | null> {
    return of(localStorage.getItem('name')).pipe(map((val) => val));
  }

  setUserInStorage(name: string, token: string) {
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
  }
}
