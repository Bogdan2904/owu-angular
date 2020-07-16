import {Component} from '@angular/core';
import {CommentService, PostService, UserService} from '../../modules';
import {IUser} from '../../Interfases/user';
import {IComment} from '../../Interfases/comment';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: IUser[];
  nameUser = 1;
  user: IUser;
  postId: number;
  comments: IComment[];


  constructor(private commentService: CommentService, private userService: UserService, private postService: PostService) {
    this.userService.getAllUser().subscribe(usersArr => {
      usersArr.map(user => {
        this.postService.getPostsBySingleId(user.id).subscribe(postsArr => user.posts = postsArr);
      });
      this.users = usersArr;
    });
  }

  subm(): void {
    this.user = this.users.find(us => us.id === this.nameUser);
    this.comments = [];
  }

  find(): void {
    this.commentService.getCommentsBySinglePost(this.postId).subscribe(commetsArr =>
      this.comments = commetsArr
    );
  }
}
