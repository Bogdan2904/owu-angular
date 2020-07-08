import {IPhotos} from './photos.interface';

export interface IAlbom {
  userId: number;
  id: number;
  title: number;
  photos: IPhotos[];
}
