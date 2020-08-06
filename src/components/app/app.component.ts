import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {
  title = 'dffd';

  myForm: FormGroup;
  login: FormControl;
  password: FormControl;
  constructor(private dataService: DataService) {
    this.login = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.myForm = new FormGroup({
      login: this.login,
      password: this.password
    });
  }

  doCheck(myForm: FormGroup): void {
    console.log(myForm);
    this.dataService.doChange({login: myForm.controls.login.value, password: myForm.controls.password.value});
    console.log(this.dataService.showStateOnConsole());
  }

  readChildvalue(value: string): void {
    this.title = value;
  }
}
