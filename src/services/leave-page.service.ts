import { Injectable } from '@angular/core';
import {CanDeactivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeavePageService implements CanDeactivate<any>{

  constructor() { }
  canDeactivate(): boolean {
    return confirm('Do you won`t leave from this page?');
  }
}
