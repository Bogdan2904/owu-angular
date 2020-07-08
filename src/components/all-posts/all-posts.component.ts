import {Component, OnInit} from '@angular/core';
import {PostService} from '../../modules/post.service';
import {IPost} from '../../Interfases/post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: IPost[];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(postsArr => this.posts = postsArr);
  }

  ngOnInit(): void {
  }

}
