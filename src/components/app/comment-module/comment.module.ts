import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommentService} from './services/comment.service';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import {RouterCommentModule} from './router-comment.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AllCommentsComponent],
  imports: [
    CommonModule,
    RouterCommentModule,
    SharedModule
  ],
  providers: [CommentService]
})
export class CommentModule { }
