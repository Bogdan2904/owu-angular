import { Injectable } from '@angular/core';
import {UserService} from './user.service';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {IUser} from '../../Interfases/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceResolveService implements Resolve<any>{

  constructor(private userService: UserService) { }

  resolve(): Observable<IUser[]> {
    return this.userService.getAuuUsers();
  }

}
