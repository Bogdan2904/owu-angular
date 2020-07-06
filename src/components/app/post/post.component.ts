import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../Interfaces/post';
import {CommentService} from '../../../services/comment-service/comment.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor(private commentService: CommentService) {
  }

  ngOnInit(): void {
  }

  getCommentsForSinglePost(postId): void {
    console.log(postId);
    this.commentService.getAllCommentsBySinglePostId(postId).subscribe(commentsArr => this.post.comments = commentsArr);
  }

}
