import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../modules/comment.service';
import {ActivatedRoute} from '@angular/router';
import {IComment} from '../../Interfases/comment';

@Component({
  selector: 'app-comments-of-post',
  templateUrl: './comments-of-post.component.html',
  styleUrls: ['./comments-of-post.component.css']
})
export class CommentsOfPostComponent implements OnInit {

  comments: IComment[];

  constructor(private commentService: CommentService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(value => {
      this.commentService.getCommentsBySinglePost(value.id).subscribe(commentsArr => this.comments = commentsArr);
    });
  }

  ngOnInit(): void {
  }

}
