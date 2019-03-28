import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { View1Component } from './view1.component';
import { View2Component } from './view2.component';
import { View2Child1Component } from './view2child1.component';
import { View2Child2Component } from './view2child2.component';

const routes: Routes = [
  { path: '', redirectTo: 'view1'},
  { path: 'view1', component: View1Component },
  {
    path: 'view2',
    component: View2Component,
    children: [
      { path: 'child1', component: View2Child1Component  },
      { path: 'child2', component: View2Child2Component },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {}
