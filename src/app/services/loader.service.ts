import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isVisible!: boolean;
  
  changeState(newState: boolean){
    console.log(newState)
    this.isVisible = newState
  }
}
