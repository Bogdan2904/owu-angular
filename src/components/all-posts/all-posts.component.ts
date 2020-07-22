import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../Interfaces';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  postForm: FormGroup;
  posts: IPost[];
  post: IPost;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.posts = value.postsArr);
    this.postForm = new FormGroup({
      selectedPost: new FormControl(this.posts[0].id)
    });
  }

  ngOnInit(): void {
  }

  showPostInfo(postForm: FormGroup): void {
    const idSelectedPost = postForm.controls.selectedPost.value;
    this.post = this.posts.find(el => el.id === idSelectedPost);
  }

}
