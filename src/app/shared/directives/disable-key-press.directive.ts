import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[disableKeyPress]',
  standalone: true,
})
export class DisableKeyPressDirective {

  @HostBinding('autocomplete') public autocomplete;

  constructor() {
    this.autocomplete = 'off';
  }

  @HostListener('keypress', ['$event']) public disableKeys(event: Event) {
    event.preventDefault();
  }
}
