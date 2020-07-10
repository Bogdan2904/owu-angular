import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPost} from '../Interfases/post';
import {IUser} from '../Interfases/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getAllUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users');
  }
  getSingleUserById(userId: number): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>(`https://jsonplaceholder.typicode.com/users?id=${userId}`);
  }
}
