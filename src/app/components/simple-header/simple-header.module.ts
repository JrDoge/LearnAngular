import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TuiLinkModule } from '@taiga-ui/core';
import { RouterLink, provideRouter } from '@angular/router';
import { SimpleHeaderComponent } from './simple-header.component';
import { routes } from '../../app.routes';

@NgModule({
  declarations: [SimpleHeaderComponent],
  imports: [CommonModule, TuiLinkModule, RouterLink],
  exports: [SimpleHeaderComponent],
  providers: [provideRouter(routes)],
})
export class SimpleHeaderModule {}
