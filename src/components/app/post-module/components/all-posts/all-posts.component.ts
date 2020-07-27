import { Component, OnInit } from '@angular/core';
import {IPost} from '../../../interfaces/IPost';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: IPost[];
  constructor(private postService: PostService) {
    this.postService.getAllPots().subscribe(postsArr => this.posts = postsArr);
  }

  ngOnInit(): void {
  }

}
