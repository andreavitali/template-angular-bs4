import {Component, ElementRef, Input, OnInit, OnDestroy, Inject, Renderer2} from '@angular/core';
import { navItems } from '../../_nav';

@Component({
  selector: 'app-container',
  templateUrl: './layout-container.component.html'
})
export class LayoutContainerComponent {
  public navItems = navItems;
}
