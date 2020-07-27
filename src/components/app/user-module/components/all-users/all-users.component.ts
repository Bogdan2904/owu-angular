import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../../interfaces/IUser';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {


  users: IUser[];
  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe(usersArr => this.users = usersArr);
  }

  ngOnInit(): void {
  }

}
