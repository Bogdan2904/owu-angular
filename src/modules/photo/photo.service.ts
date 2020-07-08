import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPhotos} from '../../Interfases/photos.interface';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  constructor(private httpClient: HttpClient) {
  }

  getAllPhotoByOneAlbum(albumId: number): Observable<IPhotos[]> {
    return this.httpClient
      .get<IPhotos[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
  }
}
