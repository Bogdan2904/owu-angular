import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import {UserService} from './app/services/user.service';
import { ArrayPrintPipe } from './app/custom-pipes/array-print.pipe';
import {HttpClientModule} from '@angular/common/http';
import { ArrPrintPipe } from './app/custom-pipes/arr-print.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ArrayPrintPipe,
    ArrPrintPipe,

  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
