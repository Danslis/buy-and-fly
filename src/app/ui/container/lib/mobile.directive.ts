import { Directive, HostBinding, Input } from '@angular/core';

import { coerceBooleanProperty } from '@baf/core';

@Directive({
  selector: 'baf-container[bafMobile]',
  standalone: true,
})
export class MobileDirective {
  @Input() mobile: boolean | string | undefined | null;

  @HostBinding('class.baf--mobile-no-gutter') get isMobile() {
    return coerceBooleanProperty(this.mobile);
  }
}
