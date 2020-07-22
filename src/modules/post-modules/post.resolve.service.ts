import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../../Interfaces';
import {PostService} from './post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<any>{

  constructor(private postService: PostService) { }
  resolve(): Observable<IPost[]>  {
    return this.postService.getAllPosts();
  }
}
