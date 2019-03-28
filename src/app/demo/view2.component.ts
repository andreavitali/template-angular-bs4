import { Component } from '@angular/core';

@Component({
  selector: 'app-view2',
  template: `
    <div class="row">
      <div class="col-12">
        <h1>View 2</h1>
        <router-outlet></router-outlet>
      </div>
    </div>
  `
})
export class View2Component {

}
