import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import {
  CommentService,
  PostResolveService,
  PostService,
  UserResolveService,
  UserService
} from '../modules';
import { AllUserComponent } from './all-user/all-user.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    AllUserComponent,
    AllPostsComponent,
    UserComponent,
    PostComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {path: 'users', component: AllUserComponent, resolve: {usersArr: UserResolveService}},
            {path: 'posts', component: AllPostsComponent, resolve: {postsArr: PostResolveService}}
        ]),
        ReactiveFormsModule,
        FormsModule
    ],
  providers: [UserService, PostService, CommentService, UserResolveService, PostResolveService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
