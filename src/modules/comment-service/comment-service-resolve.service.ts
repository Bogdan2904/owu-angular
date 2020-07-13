import { Injectable } from '@angular/core';
import {CommentService} from './comment.service';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {IComment} from '../../Interfases/comment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentServiceResolveService implements Resolve<any>{
  constructor(private commentService: CommentService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<IComment[]> {
    console.log('+route.paramMap.get(postId)', +route.paramMap.get('postId'));
    return this.commentService.getCommentsBySinglePost(+route.paramMap.get('postId'));
  }
}
