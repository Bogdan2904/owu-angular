import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../Interfases/post';
import {CommentService} from '../../modules';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  getCommentsToSinglePost(postId: number): void {
    this.commentService.getCommentsBySinglePosts(postId).subscribe(commentsArr => console.log(commentsArr));
  }

}
