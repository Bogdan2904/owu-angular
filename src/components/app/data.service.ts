import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {IUser} from './interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private state: BehaviorSubject<IUser> = new BehaviorSubject<IUser>({login: 'aaaa', password: '1111'});
  doChange(value): void{
    this.state.next(value);
  }

  showStateOnConsole(): object {
    return this.state.getValue();
  }
  constructor() { }
}
