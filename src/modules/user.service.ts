import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../Interfases/user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.httpClient
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }

  getSingleUserById(userId: number): Observable<IUser[]>{
    return this.httpClient
      .get<IUser[]>(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  }
}
