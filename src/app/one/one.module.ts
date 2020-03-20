import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OneComponent } from './one.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    OneComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
  ]
})
export class OneModule { }
