import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AllUsersComponent} from './all-users/all-users.component';
import {CommentResolveService, CommentService, PostResolveService, PostService, UserService} from '../services';
import {UserShortInfoComponent} from './user-short-info/user-short-info.component';
import {UserFullInfoComponent} from './user-full-info/user-full-info.component';
import {CompanyComponent} from './company/company.component';
import {PostComponent} from './post/post.component';
import {UserResolveService} from '../services/user-resolve.service';
import { CommentPageComponent } from './comment-page/comment-page.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUsersComponent,
    UserShortInfoComponent,
    UserFullInfoComponent,
    CompanyComponent,
    PostComponent,
    CommentPageComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users',
        component: AllUsersComponent,
        resolve: {usersArr: UserResolveService},
        children: [
          {
            path: ':id',
            component: UserFullInfoComponent,
            resolve: {postsArr: PostResolveService },
            children: [
              {
                path: 'post/:postId/comments',
                component: CommentPageComponent,
                resolve: {postsArr: CommentResolveService}
              }
            ]
          }
        ]
      }
    ])
  ],
  providers: [UserService, PostService, CommentService, UserResolveService, CommentResolveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
