import { Component, OnInit } from '@angular/core';
import {IComment} from '../../Interfases/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-comp',
  templateUrl: './comment-comp.component.html',
  styleUrls: ['./comment-comp.component.css']
})
export class CommentCompComponent implements OnInit {

  coomments: IComment[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.coomments = value.commentsArr);
  }

  ngOnInit(): void {
  }

}
