import {IAlbom} from './albom.interface';

export interface IUser {
  id: number;
  name: string;
  albums: IAlbom[];
}
