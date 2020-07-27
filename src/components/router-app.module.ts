import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path: 'all-users', loadChildren: () => import('./app/user-module/user.module').then(m => m.UserModule) },
      {path: 'all-posts', loadChildren: () => import('./app/post-module/post.module').then(m => m.PostModule) },
      {path: 'all-comments', loadChildren: () => import('./app/comment-module/comment.module').then(m => m.CommentModule) }
    ])
  ]
})
export class RouterAppModule { }
