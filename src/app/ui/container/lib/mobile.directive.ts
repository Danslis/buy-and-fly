import { Directive, HostBinding, input } from '@angular/core';

import { coerceBooleanProperty } from '@baf/core';

@Directive({
  selector: 'baf-container[bafMobile]',
  standalone: true,
})
export class MobileDirective {
   readonly mobile = input<boolean | string | undefined | null>();

  @HostBinding('class.mobile-no-gutter') get isMobile() {
    return coerceBooleanProperty(this.mobile());
  }
}
