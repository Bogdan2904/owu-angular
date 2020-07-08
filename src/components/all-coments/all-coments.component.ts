import { Component, OnInit } from '@angular/core';
import {CommentService} from '../../modules/comment.service';
import {IComment} from '../../Interfases/comment';

@Component({
  selector: 'app-all-coments',
  templateUrl: './all-coments.component.html',
  styleUrls: ['./all-coments.component.css']
})
export class AllComentsComponent implements OnInit {

  comments: IComment[];
  constructor(private commentService: CommentService) {
    this.commentService
      .getAllComments().subscribe(commentsArr => this.comments = commentsArr);
  }

  ngOnInit(): void {
  }

}
