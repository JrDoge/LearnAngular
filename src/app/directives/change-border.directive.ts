import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appChangeBorder]',
})
export class ChangeBorderDirective {
  @Input('creationDate') creationDate!: string;

  currentDate: Date = new Date();

  @HostBinding('style.border') border!: string;

  ngOnChanges(): void {
    const currentDate: Date = this.currentDate;

    const creationDate: Date = new Date(this.creationDate);

    const subtractDate: Date = new Date();
    subtractDate.setDate(subtractDate.getDate() - 14);

    if (creationDate < currentDate && !(creationDate >= subtractDate)) {
      this.border = 'none';
      return;
    }
    if (creationDate > currentDate) {
      this.border = '1px lightskyblue solid';
      return;
    }
    this.border = '1px greenyellow solid';
  }
}
