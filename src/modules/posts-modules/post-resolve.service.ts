import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {IPost} from '../../Interfases/post';
import {Observable} from 'rxjs';
import {PostService} from './post.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<any>{

  constructor(private postService: PostService) { }
  resolve(): Observable<IPost[]>{
    return this.postService.getAllPosts();
  }
}
