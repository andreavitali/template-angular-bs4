import {Component, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-sidebar-nav-title',
  template: '',
})
export class AppSidebarNavTitleComponent implements OnInit {
  @Input() item: any;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const name = this.renderer.createText(this.item.name);

    if ( this.item.class ) {
      const classes = this.item.class;
      this.renderer.addClass(nativeElement, classes);
    }

    this.renderer.appendChild(nativeElement, name);
  }
}
