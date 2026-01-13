import { Directive, ElementRef, inject, input } from '@angular/core';
@Directive({
  selector: '[appDeviceHighlight]',
  standalone: true,
  host: {
    '[style.color]': 'setActiveIcon()',
  },
})
export class DeviceDirective {
  appDeviceHighlight = input<boolean>();

  private el = inject(ElementRef);
  private highlight(state: boolean | undefined) {
    this.el.nativeElement.style.color = state
      ? 'var(--mat-sys-tertiary)'
      : 'var(--mat-sys-on-secondary-container) ';
  }
  setActiveIcon() {
    this.highlight(this.appDeviceHighlight());
  }
}
