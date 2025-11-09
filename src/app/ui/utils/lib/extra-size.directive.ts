import { Directive, HostBinding, Input } from '@angular/core';

import type { ExtraSize } from './types';

@Directive({
  selector: '[bafSize]',
  standalone: true,
  providers: [],
})
export class ExtraSizeDirective {
  @Input() size: ExtraSize = 'medium';

  @HostBinding('class.baf-size-xsmall') get isXSmall(): boolean {
    return this.size === 'xsmall';
  }

  @HostBinding('class.baf-size-small') get isSmall(): boolean {
    return this.size === 'small';
  }

  @HostBinding('class.baf-size-medium') get isMedium(): boolean {
    return this.size === 'medium';
  }

  @HostBinding('class.baf-size-large') get isLarge(): boolean {
    return this.size === 'large';
  }

  @HostBinding('class.baf-size-xlarge') get isXLarge(): boolean {
    return this.size === 'xlarge';
  }
}
