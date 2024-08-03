import type { HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  let authToken = '';
  const auth = inject(AuthService);
  auth.isAuthorized$().subscribe((v) => {
    if (v !== null) {
      authToken = v;
    }
  });
  const newReq = req.clone({
    headers: req.headers.append('Authorization', authToken),
  });
  return next(newReq);
}
