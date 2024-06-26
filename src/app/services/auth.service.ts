import { Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { of } from 'rxjs';
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
          throw new Error('Wrong login or password try again');
        }
        return users[val];
      })
    );
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

  isAuthorized() {
    const userStorage = {
      name: localStorage.getItem('name'),
      token: localStorage.getItem('token'),
    };
    const user$ = of(userStorage).pipe(
      find((user) => user.name !== null && user.token !== null),
      map((val) => {
        if (!val) {
          return false;
        }
        return true;
      })
    );
    return user$;
  }

  getUserInfo(): Observable<string | null> {
    const name$ = of(localStorage.getItem('name'));
    name$.pipe(map((val) => val));
    return name$;
  }

  setUserInStorage(name: string, token: string) {
    localStorage.setItem('name', name);
    localStorage.setItem('token', token);
  }
}
