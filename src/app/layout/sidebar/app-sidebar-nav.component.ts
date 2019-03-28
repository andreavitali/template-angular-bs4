import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarNavHelper } from './app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './app-sidebar-nav.component.html'
})
export class AppSidebarNavComponent {
  @Input() navItems: Array<any>;

  constructor(
    public router: Router,
    public navHelper: SidebarNavHelper
  ) { }
}
