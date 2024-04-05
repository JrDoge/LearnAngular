import { Component } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
  searchSection = '';

  searchHint = 'Name, fragment or date';

  plusSrc = 'assets/svgs/+.svg';
  lineSrc = 'assets/svgs/Rectangle 6.svg';

  startSearching() {
    console.log(this.searchSection);
  }
}
