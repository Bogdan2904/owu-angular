import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IUser} from '../../interfaces/IUser';
import {config} from '../../configs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAllUser(): Observable<IUser[]>{
    return this.httpClient.get<IUser[]>(config.ALL_USERS_URL);
  }
}
