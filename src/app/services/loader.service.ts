import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isVisible = new BehaviorSubject<boolean>(false);

  isVisible$ = this.isVisible.asObservable();

  showLoader(): void {
    this.isVisible.next(true);
  }

  hideLoader(): void {
    this.isVisible.next(false);
  }
}
