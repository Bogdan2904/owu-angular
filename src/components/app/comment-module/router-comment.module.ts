import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AllCommentsComponent} from './components/all-comments/all-comments.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: AllCommentsComponent}
    ])
  ]
})
export class RouterCommentModule { }
