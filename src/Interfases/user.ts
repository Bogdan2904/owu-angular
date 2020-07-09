import {IPost} from './post';

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  posts: IPost[];

}
