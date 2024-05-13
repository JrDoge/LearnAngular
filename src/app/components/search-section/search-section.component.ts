import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
  searchResult = '';

  searchHint = 'Name, fragment or date';

  @Output() searchEvent = new EventEmitter<string>()

  startSearching() {
      this.searchEvent.emit(this.searchResult)
  }
}
