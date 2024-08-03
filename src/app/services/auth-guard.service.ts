import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import type { Observable } from 'rxjs';
import { map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    @Inject(Router) private readonly router: Router,
    @Inject(AuthService) private readonly auth: AuthService
  ) {}

  canActivate(): Observable<boolean> {
    return this.auth.isAuthorized$().pipe(
      map((user) => {
        if (!user) {
          this.router.navigate(['/login']);
          return false;
        }
        return true;
      })
    );
  }
}
