import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {IUser} from '../../Interfaces';
import {Observable} from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<any> {

  constructor(private userService: UserService) {
  }

  resolve(): Observable<IUser[]> {
    return this.userService.getAllUsers();
  }

}
