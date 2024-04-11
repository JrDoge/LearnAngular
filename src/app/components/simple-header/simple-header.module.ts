import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLinkModule } from '@taiga-ui/core';
import { SimpleHeaderComponent } from './simple-header.component';

@NgModule({
  declarations: [SimpleHeaderComponent],
  imports: [CommonModule, TuiLinkModule],
  exports: [SimpleHeaderComponent],
})
export class SimpleHeaderModule {}
