import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from '../../../interfaces/IUser';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  users: IUser[];


  constructor(private userService: UserService) {

    this.userService.getAllUsers().subscribe(usersArr => this.users = usersArr);
  }

  ngOnInit(): void {
  }

}
