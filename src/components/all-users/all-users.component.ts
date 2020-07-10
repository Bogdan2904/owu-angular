import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services';
import {IUser} from '../../Interfases/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  users: IUser[];
  // constructor(private  userService: UserService) {
  //   this.userService.getAllUsers().subscribe(usersArr => this.users = usersArr);
  // }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.data.subscribe(value => this.users = value.usersArr);
  }

  ngOnInit(): void {
  }

}
