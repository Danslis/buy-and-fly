import { Directive, HostBinding, input } from '@angular/core';

import { coerceBooleanProperty } from '@baf/core';

@Directive({
  selector: 'baf-container[bafFluid]',
  standalone: true,
})
export class FluidDirective {
   readonly fluid = input<boolean | string | undefined | null>();

  @HostBinding('class.fluid') get isFluid() {
    return coerceBooleanProperty(this.fluid());
  }
}
