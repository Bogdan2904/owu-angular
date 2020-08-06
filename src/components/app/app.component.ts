import {Component} from '@angular/core';
import {UserService} from './services/user.service';
import {IUser} from './Interfaces/IUser';
import {usersWithAddress} from './constants/users';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  usersFromJSON: IUser[];
  usersFromConstants = usersWithAddress;


  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(allUsers => this.usersFromJSON = allUsers);
  }
}
