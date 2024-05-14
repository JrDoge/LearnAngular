<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
<<<<<<< HEAD
  searchResult = '';

  searchHint = 'Name, fragment or date';

  @Output() searchEvent = new EventEmitter<string>();

  startSearching() {
    this.searchEvent.emit(this.searchResult);
=======
  searchSection = '';

  searchHint = 'Name, fragment or date';

  startSearching(searchSection: string) {
    console.log(searchSection);
>>>>>>> f31c9d4fe05df0c7f64a721a1690ddd196b67c58
  }
}
