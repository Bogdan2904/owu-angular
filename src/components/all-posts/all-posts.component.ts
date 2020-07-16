import {Component, OnInit} from '@angular/core';
import {IPost} from '../../Interfases/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  postId = 1;
  posts: IPost[];
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsArr);
  }

  ngOnInit(): void {
  }

  getPostInfo(): void {
    this.post = this.posts.find(elem => elem.id === this.postId);
  }
}
