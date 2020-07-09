import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../Interfases/user';

@Component({
  selector: 'app-user-short-info',
  templateUrl: './user-short-info.component.html',
  styleUrls: ['./user-short-info.component.css']
})
export class UserShortInfoComponent implements OnInit {

  @Input()
  user: IUser;
  constructor() { }

  ngOnInit(): void {
  }

}
