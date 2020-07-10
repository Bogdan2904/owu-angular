import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../Interfases/post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  getComments(post: IPost): void {
    this.router.navigate(['users', post.userId, 'post', post.id, 'comments']);
  }

}
