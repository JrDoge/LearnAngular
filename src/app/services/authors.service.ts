import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  authors = new BehaviorSubject<string[]>([]);

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {}

  getAuthors$() {
    return this.http
      .get<Record<string, any>>('http://localhost:3001/authors')
      .pipe(
        map((val) => {
          const arr = Object.values(val);
          const names: string[] = [];
          arr.forEach((el) => {
            names.push(el.value);
          });
          this.authors.next(names);
        })
      );
  }
}
