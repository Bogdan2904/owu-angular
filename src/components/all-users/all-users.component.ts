import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../Interfases/user';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  user: IUser;
  users: IUser[];
  id: number;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.users = value.usersArr);
  }

  ngOnInit(): void {
  }

  getUser(): void {
    const id = this.id;
    this.users.map(us => us.id === parseInt(id));
  }
}
