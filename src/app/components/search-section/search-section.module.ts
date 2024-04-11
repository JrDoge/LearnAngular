import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { TuiInputModule } from '@taiga-ui/kit';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSectionComponent } from './search-section.component';

@NgModule({
  declarations: [SearchSectionComponent],
  imports: [
    CommonModule,
    TuiButtonModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    TuiTextfieldControllerModule,
  ],
  exports: [SearchSectionComponent],
})
export class SearchSectionModule {}