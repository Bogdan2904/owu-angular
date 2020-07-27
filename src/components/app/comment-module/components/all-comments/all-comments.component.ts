import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../services/comment.service';
import {IComment} from '../../../interfaces/IComment';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: IComment[];
  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(commentsArr => this.comments = commentsArr);
  }

  ngOnInit(): void {
  }

}
