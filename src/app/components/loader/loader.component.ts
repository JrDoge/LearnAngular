import { Component, Inject } from '@angular/core';
import type { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.less',
})
export class LoaderComponent {
  isVisible: Observable<boolean> = this.loader.isVisible$;

  constructor(@Inject(LoaderService) readonly loader: LoaderService) {
    // this.loader.isVisible$.subscribe((isVisible) => {
    //   this.isVisible = isVisible;
    // });
  }
}
