import { Component, ViewChild } from '@angular/core';
import type { TuiInputComponent } from '@taiga-ui/kit';

@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent {
  searchRequest = '';
  searchHint = 'Name, fragment or date';

  @ViewChild('input') input!: TuiInputComponent;
}
