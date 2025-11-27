import { Directive, HostBinding, Input } from '@angular/core';

import type { ButtonMode } from './types';

@Directive({
  selector: '[bafMode]',
  standalone: true,
  providers: [],
})
export class ModeDirective {
  @Input() mode: ButtonMode = 'primary';

  @HostBinding('class.mode-primary') get isModePrimary() {
    return this.mode === 'primary';
  }

  @HostBinding('class.mode-secondary') get isModeSecondary(): boolean {
    return this.mode === 'secondary';
  }

  @HostBinding('class.mode-tertiary') get isModeTertiary(): boolean {
    return this.mode === 'tertiary';
  }
}
