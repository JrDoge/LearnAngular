import { Inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { finalize, from, of, switchMap } from 'rxjs';
import { find, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import type { User } from '../interfaces/user-info';

import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'http://localhost:3001/token';
  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(Router) private readonly router: Router
  ) {}

  login(login: string, password: string) {
    this.loader.showLoader();
    this.http
      .post<User>(this.url, {
        login,
        password,
      })
      .pipe(finalize(() => this.loader.hideLoader()))
      .subscribe({
        next: (response) => {
          const result = response.token;
          this.setUserInStorage(result);
          this.router.navigate(['/courses']);
        },
        error: () => {
          throw new Error('Wrong login or password try again');
        },
      });
  }

  logout() {
    localStorage.clear();
  }

  isAuthorized$() {
    return of(localStorage.getItem('token'));
  }

  getUserInfo(): Observable<string | undefined> {
    const currentToken = localStorage.getItem('token');
    return this.http
      .get<User[]>(this.url, {
        params: {
          token: currentToken !== null ? currentToken : '',
        },
      })
      .pipe(
        switchMap((data) => from(data)),
        find((val) => val.token === currentToken),
        map((user) => {
          const name = user?.name;
          return name;
        })
      );
  }

  setUserInStorage(token: string) {
    localStorage.setItem('token', token);
  }
}
