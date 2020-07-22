import {IPost} from './post.interface';

export class IUser {
  id: number;
  name: string;
  posts: IPost[];
  username: string;
  email: string;
  phone: string;
}
