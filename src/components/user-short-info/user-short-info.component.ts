import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../Interfases/user';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-short-info',
  templateUrl: './user-short-info.component.html',
  styleUrls: ['./user-short-info.component.css']
})
export class UserShortInfoComponent implements OnInit {

  @Input()
  user: IUser;

  constructor(private route: Router) {
  }

  ngOnInit(): void {
  }

  toUserDetails(user: IUser): void {
    this.route.navigate(['users', user.id], {state: {user}});
  }
}
