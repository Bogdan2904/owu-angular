import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../Interfaces/user';
import {PostService} from '../../../services/post-service/post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private postService: PostService) {
  }

  @Input()
  user: User;

  ngOnInit(): void {
  }

  getAllPostsBySingleUser(userId): void {
    this.postService.getAllPostsBySingleUser(userId).subscribe(postsArr => this.user.posts = postsArr);
  }
}
