import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CommentService, PostService, UserService} from '../../modules';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {UserShortInfoComponent} from '../user-short-info/user-short-info.component';
import {UserFullInfoComponent} from '../user-full-info/user-full-info.component';
import {UserPageComponent} from '../user-page/user-page.component';
import {PostComponent} from '../post/post.component';


@NgModule({
  declarations: [
    AppComponent,
    UserShortInfoComponent,
    UserFullInfoComponent,
    UserPageComponent,
    PostComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'user/:id', component: UserPageComponent}
    ])
  ],
  providers: [CommentService, UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
