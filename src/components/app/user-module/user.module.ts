import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {RouterUserModule} from './router-user.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AllUsersComponent],
  imports: [
    CommonModule,
    RouterUserModule,
    SharedModule
  ],
  providers: [UserService]
})
export class UserModule { }
