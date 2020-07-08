import { Component, OnInit } from '@angular/core';
import {PostService} from '../../modules/post.service';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../Interfases/post';

@Component({
  selector: 'app-posts-of-user',
  templateUrl: './posts-of-user.component.html',
  styleUrls: ['./posts-of-user.component.css']
})
export class PostsOfUserComponent implements OnInit {

  posts: IPost[];
  constructor(private  postService: PostService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.postService.getPostsToSingleUser(value.id).subscribe(postsArr => this.posts = postsArr);
    });
  }

  ngOnInit(): void {
  }

}
