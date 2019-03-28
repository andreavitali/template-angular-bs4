import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutContainerComponent } from './layout/container/layout-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'demo', pathMatch: 'full' },
  { path: '', component: LayoutContainerComponent,
    children: [
      { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
    ]
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
