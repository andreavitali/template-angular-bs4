import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const ANGULAR_MODULES = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule
];

const APP_COMPONENTS = [
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
  ],
  declarations: [
    ...APP_COMPONENTS
  ],
  providers: [ ],
  entryComponents: [ ],
  exports:  [
    ...ANGULAR_MODULES,
    ...APP_COMPONENTS
  ]
})
export class SharedModule { }
