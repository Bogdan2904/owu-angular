import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from './buttons.component';
import {RouterModule, Routes} from '@angular/router';



const routes: Routes = [
  {path: '', component: ButtonsComponent}
];

@NgModule({
  declarations: [ButtonsComponent],
  exports: [
    ButtonsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ButtonsModule { }
