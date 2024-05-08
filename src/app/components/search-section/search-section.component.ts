import { Component } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
  searchSection = '';

  searchHint = 'Name, fragment or date';

  startSearching(searchSection: string) {
    console.log(searchSection);
  }
}
