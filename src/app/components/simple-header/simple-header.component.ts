import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-simple-header',
  templateUrl: './simple-header.component.html',
  styleUrl: './simple-header.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleHeaderComponent {
  userName = 'Konstantin';
  logoSrc = 'assets/svgs/Logo.svg';
  iconsSrc = ['assets/svgs/icon-16.svg', 'assets/svgs/Icon.svg'];
}
