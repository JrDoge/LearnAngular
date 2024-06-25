import { Injectable } from '@angular/core';
import { timer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  loader$() {
    let isVisible = true;
    timer(5000).subscribe(() => {
      isVisible = true;
    });
    return isVisible;
  }
}
