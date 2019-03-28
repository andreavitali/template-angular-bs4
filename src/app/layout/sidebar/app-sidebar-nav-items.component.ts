import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import { SidebarNavHelper } from './app-sidebar-nav.service';

@Component({
  selector: 'app-sidebar-nav-items',
  templateUrl: './app-sidebar-nav-items.component.html'
})
export class AppSidebarNavItemsComponent {
  @Input() items: Array<any>;
  constructor(
    public router: Router,
    public navHelper: SidebarNavHelper
  ) { }
}
