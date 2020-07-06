import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {PostComponent} from './post/post.component';
import {UserComponent} from './user/user.component';
import {CommentComponent} from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    UserComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
