import { Component, Inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.less',
})
export class LoaderComponent {
  isVisible = false;

  constructor(@Inject(LoaderService) readonly loader: LoaderService) {
    this.loader.isVisible$.subscribe((isVisible) => {
      this.isVisible = isVisible;
    });
  }
}
