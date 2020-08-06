import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextComponent } from './next/next.component';
import {NextRoutingModule} from './next-routing.module';



@NgModule({
  declarations: [NextComponent],
  imports: [
    CommonModule,
    NextRoutingModule
  ]
})
export class NextModule { }
