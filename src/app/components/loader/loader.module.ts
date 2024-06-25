import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLoaderModule } from '@taiga-ui/core';
import { LoaderComponent } from './loader.component';

@NgModule({
  declarations: [LoaderComponent],
  imports: [CommonModule, TuiLoaderModule],
  exports: [LoaderComponent],
})
export class LoaderModule {}
