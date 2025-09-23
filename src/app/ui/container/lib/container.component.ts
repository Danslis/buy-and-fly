import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FluidDirective } from './fluid.directive';
import { MobileDirective } from './mobile.directive';

@Component({
  selector: 'baf-container',
  standalone: true,
  template: '<ng-content/>',
  styleUrl: './container.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'baf-container',
  },
  hostDirectives: [
    {
      directive: FluidDirective,
      inputs: ['fluid'],
    },
    {
      directive: MobileDirective,
      inputs: ['mobile'],
    }
  ],
})
export class ContainerComponent { }
