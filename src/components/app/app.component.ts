import {Component} from '@angular/core';
import {UserService} from '../../modules/user.service';
import {IUser} from '../../Interfases/user';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: IUser[];

  constructor() {
  }


}
