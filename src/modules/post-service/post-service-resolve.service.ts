import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {PostService} from './post.service';
import {IPost} from '../../Interfases/post';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostServiceResolveService implements Resolve<any>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IPost[]> {
    return this.postService.getPostBySingleUser(+route.paramMap.get('userId'));
  }
}
