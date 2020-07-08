import {Component} from '@angular/core';
import {UserService} from '../../modules/user/user.service';
import {IUser} from '../../Interfases/user.interface';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: IUser[];

  constructor(private userService: UserService) {
    this.userService
      .getAllUsers().subscribe(usersArr => this.users = usersArr);
  }
}
