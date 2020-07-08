import { Component, OnInit } from '@angular/core';
import {UserService} from '../../modules/user.service';
import {IUser} from '../../Interfases/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: IUser[];
  constructor(private userService: UserService) {
    this.userService
      .getAllUsers().subscribe(usersArr => this.users = usersArr);
  }

  ngOnInit(): void {
  }

}
