import { Directive, HostBinding, Input } from '@angular/core';

import { coerceBooleanProperty } from '@baf/core';

@Directive({
  selector: 'baf-container[bafFluid]',
  standalone: true,
})
export class FluidDirective {
  @Input() fluid: boolean | string | undefined | null;

  @HostBinding('class.fluid') get isFluid() {
    return coerceBooleanProperty(this.fluid);
  }
}
