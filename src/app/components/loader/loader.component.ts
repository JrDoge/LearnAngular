import { Component, Inject } from '@angular/core';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.less',
})
export class LoaderComponent {
  isVisible = false;
  constructor(
    @Inject(LoaderService) private readonly loaderService: LoaderService
  ) {
    this.isVisible = this.loaderService.isVisible;
  }
}
