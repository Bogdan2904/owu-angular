import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import {PostComponent} from '../post/post.component';
import {UserComponent} from '../user/user.component';
import {CommentComponent} from '../comment/comment.component';
import {AllUsersComponent} from '../all-users/all-users.component';
import {AllPostsComponent} from '../all-posts/all-posts.component';
import {AllComentsComponent} from '../all-coments/all-coments.component';
import {PostsOfUserComponent} from '../posts-of-user/posts-of-user.component';
import {CommentsOfPostComponent} from '../comments-of-post/comments-of-post.component';


import {PostService} from '../../modules/post.service';
import {UserService} from '../../modules/user.service';
import {CommentService} from '../../modules/comment.service';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    CommentComponent,
    AllUsersComponent,
    AllPostsComponent,
    AllComentsComponent,
    PostsOfUserComponent,
    CommentsOfPostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent},
      {path: 'posts', component: AllPostsComponent},
      {path: 'comments', component: AllComentsComponent},
      {path: 'users/:id/posts', component: PostsOfUserComponent},
      {path: 'posts/:id/comments', component: CommentsOfPostComponent}
      ])
  ],
  providers: [CommentService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
