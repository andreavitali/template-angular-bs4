import {Directive, HostListener, Inject, Renderer2} from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Directive({
  selector: '[appSidebarToggler]'
})
export class SidebarToggleDirective {
  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.document.body.classList.toggle('sidebar-hidden');
  }
}

@Directive({
  selector: '[appMobileSidebarToggler]'
})
export class MobileSidebarToggleDirective {
  constructor(@Inject(DOCUMENT) private document: any) { }

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.document.body.classList.toggle('sidebar-mobile-show');
  }
}
