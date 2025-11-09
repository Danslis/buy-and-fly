import { Directive, HostBinding, Input } from '@angular/core';

import type { ButtonMode } from './types';

@Directive({
  selector: '[bafMode]',
  standalone: true,
  providers: [],
})
export class ModeDirective {
  @Input() mode: ButtonMode = 'primary';

  @HostBinding('class.baf-mode-primary') get isModePrimary() {
    return this.mode === 'primary';
  }

  @HostBinding('class.baf-mode-secondary') get isModeSecondary(): boolean {
    return this.mode === 'secondary';
  }

  @HostBinding('class.baf-mode-tertiary') get isModeTertiary(): boolean {
    return this.mode === 'tertiary';
  }
}
