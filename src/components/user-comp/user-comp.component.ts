import { Component, OnInit } from '@angular/core';
import {IUser} from '../../Interfases/user';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../modules';

@Component({
  selector: 'app-user-comp',
  templateUrl: './user-comp.component.html',
  styleUrls: ['./user-comp.component.css']
})
export class UserCompComponent implements OnInit {

  users: IUser[];
  constructor(private userService: UserService) {
    this.userService.getAuuUsers().subscribe(usersArr => this.users = usersArr);
  }

  ngOnInit(): void {
  }

}
