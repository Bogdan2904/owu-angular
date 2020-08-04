import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import {HttpClientModule} from '@angular/common/http';
import { MorePipe } from './app/more.pipe';
import { BoldDirective } from './app/bold.directive';


@NgModule({
  declarations: [
    AppComponent,
    MorePipe,
    BoldDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
