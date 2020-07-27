import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AllPostsComponent}
    ])
  ]
})
export class RouterPostModule { }
