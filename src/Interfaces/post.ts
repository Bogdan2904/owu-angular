import {IComment} from './comment';


export class Post {
  id: number;
  body: string;
  userId: number;
  title: string;
  comments: IComment[];
}
