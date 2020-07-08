import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IAlbom} from '../../Interfases/albom.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbomService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbumBySingleUser(userId: number): Observable<IAlbom[]> {
    return this.httpClient
      .get<IAlbom[]>(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  }

}
