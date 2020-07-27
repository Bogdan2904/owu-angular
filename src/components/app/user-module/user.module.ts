import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllUserComponent } from './components/all-user/all-user.component';
import {SharedModule} from '../shared/shared.module';
import {UserService} from './services/user.service';
import {AppComponent} from '../app.component';
import {RouterModule} from '@angular/router';
import {RotuerUserModule} from './rotuer-user.module';




@NgModule({
  declarations: [AllUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    RotuerUserModule
  ],
  providers: [UserService]
  // bootstrap: [AllUserComponent],

})
export class UserModule { }
