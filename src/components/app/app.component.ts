import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from '../../interfaces/user.inteface';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {
  form: FormGroup;
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  user: IUser;
  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({
      email: this.email,
      password: new FormControl('', [Validators.minLength(5)]),
      confirm: new FormControl('', [Validators.required])
    }, this.passValidator.bind(this));
    // this.form = formBuilder.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   password: '',
    //   confirm: ['', Validators.required]
    // });
  }

  save(form: FormGroup): void {
    this.user = form.getRawValue();
    console.log(this.user.email);
    console.log(this.user);
  }

  passValidator(form: FormGroup): null | object{
    const {value: password} = form.controls.password;
    const {value: confirm} = form.controls.confirm;
    return password === confirm ? null : {passwordError: true};
  }
}


