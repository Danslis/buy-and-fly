import { Directive, HostBinding, input } from '@angular/core';

import type { ExtraSize } from './types';

@Directive({
  selector: '[bafSize]',
  standalone: true,
  providers: [],
})
export class ExtraSizeDirective {
  readonly size = input<ExtraSize>('medium');

  @HostBinding('class.size-xsmall') get isXSmall(): boolean {
    return this.size() === 'xsmall';
  }

  @HostBinding('class.size-small') get isSmall(): boolean {
    return this.size() === 'small';
  }

  @HostBinding('class.size-medium') get isMedium(): boolean {
    return this.size() === 'medium';
  }

  @HostBinding('class.size-large') get isLarge(): boolean {
    return this.size() === 'large';
  }

  @HostBinding('class.size-xlarge') get isXLarge(): boolean {
    return this.size() === 'xlarge';
  }
}
