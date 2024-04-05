import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-search-section',
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.less',
})
export class SearchSectionComponent{
  searchSection: string = "";

  searchHint = "Name, fragment or date"
  
  plusSrc  = "assets/svgs/+.svg"
  lineSrc = "assets/svgs/Rectangle 6.svg"

  startSearching(){
    console.log(this.searchSection)
  }
}
