import {Component, Input, OnInit} from '@angular/core';
import {IComment} from '../../Interfases/comment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-comment-page',
  templateUrl: './comment-page.component.html',
  styleUrls: ['./comment-page.component.css']
})
export class CommentPageComponent implements OnInit {

  comments: IComment[];
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.comments = value.postsArr);
  }

  ngOnInit(): void {
  }

}
