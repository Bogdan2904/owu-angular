import {Component} from '@angular/core';
import {UserService} from '../../services/user-service/user.service';
import {User} from '../../Interfaces/user';
import {Post} from '../../Interfaces/post';
import {PostService} from '../../services/post-service/post.service';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: User[];

  constructor(private userService: UserService, private postService: PostService) {
    this.userService.getAllUsers().subscribe(usersArr => {
        // usersArr.forEach(user => {
        //   this.postService.getAllPostsBySingleUser(user.id).subscribe(postsArr => user.posts = postsArr);
        // });
        this.users = usersArr;
      }
    );
  }
}
