import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from '../user/user.component';
import {PhotoComponent} from '../photo/photo.component';
import {AlbomComponent} from '../albom/albom.component';
import {HttpClientModule} from '@angular/common/http';

import {AlbomService} from '../../modules/albom/albom.service';
import {PhotoService} from '../../modules/photo/photo.service';
import {UserService} from '../../modules/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PhotoComponent,
    AlbomComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AlbomService, PhotoService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
