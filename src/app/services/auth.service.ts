import { Inject, Injectable } from '@angular/core';
import type { Observable } from 'rxjs';
import { finalize, from, of, switchMap } from 'rxjs';
import { find, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import type { User } from '../user-info';

import { LoaderService } from './loader.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    @Inject(HttpClient) private readonly http: HttpClient,
    @Inject(LoaderService) private readonly loader: LoaderService,
    @Inject(Router) private readonly router: Router
  ) {}

  login(login: string, password: string) {
    this.loader.showLoader();
    this.http
      .get<User[]>(
        `http://localhost:3001/user?login=${login}&password=${password}`
      )
      .pipe(finalize(() => this.loader.hideLoader()))
      .subscribe((response) => {
        const result = response[0].token;
        if (!result) {
          throw new Error('Wrong login or password try again');
        } else {
          this.setUserInStorage(result);
          this.router.navigate(['/courses']);
        }
      });
  }

  logout() {
    localStorage.clear();
  }

  isAuthorized$() {
    return of(localStorage.getItem('token'));
  }

  getUserInfo(): Observable<User | undefined> {
    const currentToken = localStorage.getItem('token');
    return this.http
      .get<User[]>(`http://localhost:3001/user?token${currentToken}`)
      .pipe(
        switchMap((data) => from(data)),
        find((val) => val.token === currentToken),
        map((user) => user)
      );
  }

  setUserInStorage(token: string) {
    localStorage.setItem('token', token);
  }
}
