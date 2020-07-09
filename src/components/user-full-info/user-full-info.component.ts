import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../Interfases/user';

@Component({
  selector: 'app-user-full-info',
  templateUrl: './user-full-info.component.html',
  styleUrls: ['./user-full-info.component.css']
})
export class UserFullInfoComponent implements OnInit {

  @Input()
  user: IUser;
  constructor() {}

  ngOnInit(): void {
  }

}
