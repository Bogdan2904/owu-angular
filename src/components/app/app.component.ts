import {Component} from '@angular/core';
import {UserService} from '../../modules';
import {IUser} from '../../Interfases/user';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: IUser[];
  constructor(private userService: UserService) {
    this.userService.getAllUsers().subscribe(userArr => this.users = userArr);
  }
}
