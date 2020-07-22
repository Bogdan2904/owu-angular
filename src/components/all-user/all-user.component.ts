import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../Interfaces';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.css']
})
export class AllUserComponent implements OnInit {

  form: FormGroup;
  newUserForm: FormGroup;
  users: IUser[];
  user: IUser;
  newUser: IUser;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.users = value.usersArr);
    this.form = new FormGroup({
      selectedUser: new FormControl(this.users[0].id)
    });
    this.newUserForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
    this.newUserForm.valueChanges.pipe(debounceTime(400)).subscribe(value => console.log(value));
  }


  showInfo(form: FormGroup): void {
    const idSelectedUser = form.controls.selectedUser.value;
    this.user = this.users.find(elem => elem.id === idSelectedUser);
  }

  createNewUser(newUserForm: FormGroup): void {
    this.newUser = newUserForm.getRawValue();
    this.newUser.id = Math.round(Math.random() * 10000);
    this.users.push(this.newUser);
    newUserForm.reset();
  }
}
