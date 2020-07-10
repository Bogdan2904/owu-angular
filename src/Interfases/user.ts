import {IPost} from './post';
import {ICompany} from './company';

export interface IUser {
  id: number;
  name: string;
  username: string;
  posts: IPost[];
  company: ICompany;

}
