import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../modules/user.service';
import {IUser} from '../../Interfaces/user';
import {debounceTime} from 'rxjs/operators';
import {formatNumber} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent implements OnInit {

  filterForm: FormGroup;
  users: IUser[];
  newUsersArr: IUser[];

  constructor(private userService: UserService) {
    this.userService.getAllUser().subscribe(usersArr => this.users = usersArr);
    this.filterForm = new FormGroup({
      filterByName: new FormControl(null),
      filterByUpToUserNameLength: new FormControl(null),
      filterMinValueId: new FormControl(null),
      filterMaxValueId: new FormControl(null)
    });
  }

  ngOnInit() {
    this.filterForm.valueChanges.pipe(debounceTime(400)).subscribe(value => {
        let arr = this.users.concat();
        if (value.filterByName) {
          arr = arr.filter(us => us.name.includes(value.filterByName));
        }

        if (value.filterByUpToUserNameLength) {
          arr = arr.filter(us => us.username.length < value.filterByUpToUserNameLength
          );
        }
        if (value.filterMinValueId) {

          arr = arr.filter(us => us.id >= value.filterMinValueId);
        }
        if (value.filterMaxValueId) {
          arr = arr.filter(us => us.id <= value.filterMaxValueId);
        }
        this.newUsersArr = arr;
      }
    );

    console.log(this.filterForm.value);

  }


  filter(filterForm: FormGroup): void {

  }

}
