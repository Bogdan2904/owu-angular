import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {
  CommentService, CommentServiceResolveService,
  PostService,
  PostServiceResolveService,
  UserService,
  UserServiceResolveService
} from '../modules';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserInfoComponent} from './user-info/user-info.component';
import {PostInfoComponent} from './post-info/post-info.component';
import {CommentInfoComponent} from './comment-info/comment-info.component';
import {UserCompComponent} from './user-comp/user-comp.component';
import {PostCompComponent} from './post-comp/post-comp.component';
import { CommentCompComponent } from './comment-comp/comment-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    PostInfoComponent,
    CommentInfoComponent,
    UserCompComponent,
    PostCompComponent,
    CommentCompComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'user/:userId',
        component: PostCompComponent,
        resolve: {postsArr: PostServiceResolveService},
        children: [
          {
            path: 'post/:postId/comments',
            component: CommentCompComponent,
            resolve: {commentsArr: CommentServiceResolveService}
          },
        ]
      }
    ])
  ],
  providers: [UserService, PostService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
