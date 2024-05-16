import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChangeBorderDirective } from './change-border.directive';

@NgModule({
  declarations: [ChangeBorderDirective],
  imports: [CommonModule],
  exports: [ChangeBorderDirective],
})
export class ChangeBorderModule {}
