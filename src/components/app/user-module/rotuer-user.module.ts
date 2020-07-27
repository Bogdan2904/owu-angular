import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AllUserComponent} from './components/all-user/all-user.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AllUserComponent }
    ])
  ]
})
export class RotuerUserModule { }
