import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(@Inject(HttpClient) private readonly http: HttpClient) {
    http.get('http://localhost:3001/authors').subscribe(
      (val) => console.log(val)
    )
  }
}
