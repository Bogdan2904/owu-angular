import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../Interfaces';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  form: FormGroup;
  users: IUser[];
  user: IUser;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.users = value.usersArr);
    this.form = new FormGroup({
      selectedUser: new FormControl(this.users[0].id)
    });
  }
  ngOnInit(): void {
  }



  // showUserInfo(): void {
  //   console.log(this.selectedUser);
  // }
  showInfo(form: FormGroup): void {
    const idSelectedUser = form.controls.selectedUser.value;
    this.user = this.users.find(elem => elem.id === idSelectedUser);
  }
}
