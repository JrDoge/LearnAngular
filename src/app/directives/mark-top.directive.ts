import type { SimpleChanges } from '@angular/core';
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appMarkTop]',
})
export class MarkTopDirective {
  @Input('topRated') topRated!: boolean;

  @HostBinding('style.backgroundColor') color = '';

  ngOnChanges(changes: SimpleChanges): void {
    if (this.topRated) {
      this.color = 'hsl(46, 100%, 94%, 1)';
    } else {
      this.color;
    }
  }
}
