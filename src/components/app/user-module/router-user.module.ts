import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AllUsersComponent}
    ])
  ]
})
export class RouterUserModule { }
