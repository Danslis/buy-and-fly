import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PathPipe, PATHS } from '@baf/core';
import { ContainerComponent } from '@baf/ui/container';
import { LogoComponent } from '@baf/ui/icons';

@Component({
  selector: 'baf-header',
  standalone: true,
  imports: [LogoComponent, ContainerComponent, RouterLink, PathPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  readonly paths = PATHS;
}
