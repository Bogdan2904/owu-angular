import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IPost} from '../../Interfases/post';

@Component({
  selector: 'app-post-comp',
  templateUrl: './post-comp.component.html',
  styleUrls: ['./post-comp.component.css']
})
export class PostCompComponent implements OnInit {

  posts: IPost[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => {
        console.log(value.postsArr);
        this.posts = value.postsArr;
      }
    );
  }

  ngOnInit(): void {
  }

}
