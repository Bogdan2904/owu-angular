import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NextPageService implements CanActivate{

  constructor() { }
  canActivate(): boolean {
    return confirm('Are you assured?');
  }
}
