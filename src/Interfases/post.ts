import {IComment} from './comment';

export interface IPost {
  id: number;
  body: string;
  userId: number;
  title: string;
  comments: IComment[];
}
