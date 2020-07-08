import {IPost} from './post';

export interface IUser {
  id: number;
  name: string;
  posts: IPost[];

}
