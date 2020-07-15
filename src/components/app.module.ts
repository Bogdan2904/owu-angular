import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import {CommentResolveService, CommentService, PostResolveService, PostService, UserService} from '../modules';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { PostsComponent } from './posts/posts.component';
import { CommentComponent } from './comment/comment.component';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    CommentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, PostService, PostResolveService, CommentService, CommentResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
