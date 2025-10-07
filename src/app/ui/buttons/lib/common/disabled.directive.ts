import { Directive, HostBinding, Input } from '@angular/core';

import { coerceBooleanProperty } from '@baf/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[disabled]',
  standalone: true,
})
export class DisabledDirective {
  @Input() disabled: string | boolean | null | undefined;

  @HostBinding('class.baf-is-disabled') get isSmall(): boolean {
    return coerceBooleanProperty(this.disabled);
  }
}
