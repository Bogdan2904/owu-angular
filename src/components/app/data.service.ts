import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  state: BehaviorSubject<{ number: number }> = new BehaviorSubject<{number: number}>({number: 0});
  constructor() { }

  changeState( value ): void {
    this.state.next(value);
  }
  getState(): number {
    return this.state.getValue().number;
  }
}
