import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { LayoutContainerComponent } from './container/layout-container.component';
import { AppHeaderComponent } from './header/app-header.component';
import { SidebarToggleDirective, MobileSidebarToggleDirective } from './directives/app-sidebar-toggle.directive';
import { SidebarNavHelper } from './sidebar/app-sidebar-nav.service';
import { AppSidebarComponent } from './sidebar/app-sidebar.component';
import { AppSidebarNavComponent } from './sidebar/app-sidebar-nav.component';
import { AppSidebarNavDividerComponent } from './sidebar/app-sidebar-nav-divider.component';
import { AppSidebarNavItemsComponent } from './sidebar/app-sidebar-nav-items.component';
import { AppSidebarNavDropdownComponent } from './sidebar/app-sidebar-nav-dropdown.component';
import { AppSidebarNavLinkComponent } from './sidebar/app-sidebar-nav-link.component';
import { AppSidebarNavTitleComponent } from './sidebar/app-sidebar-nav-title.component';
import { NavDropdownDirective, NavDropdownToggleDirective } from './directives/app-nav-dropdown.directive';

@NgModule({
  imports: [
    RouterModule,
    SharedModule
  ],
  declarations: [
    LayoutContainerComponent,
    AppHeaderComponent,
    SidebarToggleDirective,
    MobileSidebarToggleDirective,
    AppSidebarComponent,
    AppSidebarNavComponent,
    AppSidebarNavDividerComponent,
    AppSidebarNavItemsComponent,
    AppSidebarNavDropdownComponent,
    AppSidebarNavLinkComponent,
    AppSidebarNavTitleComponent,
    NavDropdownDirective,
    NavDropdownToggleDirective
  ],
  exports: [ ],
  providers: [
    SidebarNavHelper
  ]
})
export class LayoutModule { }
