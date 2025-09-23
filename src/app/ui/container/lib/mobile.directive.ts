import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'baf-container[bafMobile]',
  standalone: true,
})
export class MobileDirective {
  @Input() mobile: boolean | string | undefined | null;

  @HostBinding('class.baf--mobile-no-gutter') get isMobile() {
    return this.coerceBooleanProperty(this.mobile);
  }

  private coerceBooleanProperty(value: unknown): boolean {
    return value != null && `${value}` !== 'false';
  }
}
