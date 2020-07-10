import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {IPost} from '../Interfases/post';
import {PostService} from './post.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost[]> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<IPost[]> {
    console.log(+route.paramMap.get('id'));
    return this.postService.getPostsBuSingleUser(+route.paramMap.get('id'));
  }
}
