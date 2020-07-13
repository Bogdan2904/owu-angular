import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../Interfases/post';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-info',
  templateUrl: './post-info.component.html',
  styleUrls: ['./post-info.component.css']
})
export class PostInfoComponent implements OnInit {

  @Input()
  post: IPost;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  showAllComments(post: IPost): void{
    this.route.navigate(['user', this.post.userId, 'post', post.id, 'comments']);
  }

}
