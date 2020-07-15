import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './all-users/all-users.component';
import {AllPostsComponent} from './all-posts/all-posts.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {UserService} from '../modules/user-modules/user.service';
import {UserResolveService} from '../modules/user-modules/user-resolve.service';
import {PostService} from '../modules/posts-modules/post.service';
import {PostResolveService} from '../modules/posts-modules/post-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    AllPostsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: AllUsersComponent,
        resolve: {usersArr: UserResolveService}
      },
      {
        path: 'posts',
        component: AllPostsComponent,
        resolve: {postsArr: PostResolveService}
      }
    ])
  ],
  providers: [UserService, UserResolveService, PostService, PostResolveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
