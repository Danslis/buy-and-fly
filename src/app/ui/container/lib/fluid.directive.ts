import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'baf-container[bafFluid]',
  standalone: true,
})
export class FluidDirective {
  @Input() fluid: boolean | string | undefined | null;

  @HostBinding('class.baf-fluid') get isFluid() {
    return this.coerceBooleanProperty(this.fluid);
  }

  private coerceBooleanProperty(value: unknown): boolean {
    return value != null && `${value}` !== 'false';
  }
}
