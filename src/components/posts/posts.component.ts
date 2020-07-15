import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../Interfases/post';
import {CommentService} from '../../modules';
import {IComment} from '../../Interfases/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input()
  post: IPost;


  constructor() {
  }

  ngOnInit(): void {
  }

}
