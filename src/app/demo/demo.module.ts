import { NgModule } from '@angular/core';
import { View1Component } from './view1.component';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { View2Component } from './view2.component';
import { View2Child1Component } from './view2child1.component';
import { View2Child2Component } from './view2child2.component';

@NgModule({
  declarations: [
    View1Component,
    View2Component,
    View2Child1Component,
    View2Child2Component
  ],
  imports: [
    SharedModule,
    DemoRoutingModule
  ]
})
export class DemoModule { }
