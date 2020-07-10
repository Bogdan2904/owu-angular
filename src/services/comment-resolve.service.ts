import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {IComment} from '../Interfases/comment';
import {Observable} from 'rxjs';
import {CommentService} from './comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment[]>{

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<IComment[]> {
    return this.commentService.getCommentsBySinglePost(+route.paramMap.get('postId'));
  }
}
