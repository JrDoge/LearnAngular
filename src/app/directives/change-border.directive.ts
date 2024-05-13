import type { SimpleChanges } from '@angular/core';
import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]',
})
export class ChangeBorderDirective {
  @Input('creationDate') creationDate!: string;

  date: Date = new Date();

  currentDate = `${this.date.getFullYear()}-${(this.date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${this.date.getDate().toString().padStart(2, '0')}`;

  @HostBinding('style.border') border = '';

  ngOnChanges(changes: SimpleChanges): void {
    const currentDate: Date = new Date(String(this.currentDate));

    const creationDate: Date = new Date(String(this.creationDate));

    if (
      Number(creationDate) < Number(currentDate) &&
      Number(creationDate) >=
        Number(currentDate.setDate(currentDate.getDate() - 14))
    ) {
      this.border = '1px greenyellow solid';
    } else if (Number(creationDate) > Number(currentDate)) {
      this.border = '1px lightskyblue solid';
    }
    this.border;
  }
}
