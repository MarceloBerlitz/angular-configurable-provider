import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoComponent } from './two.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TwoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
  ]
})
export class TwoModule { }
