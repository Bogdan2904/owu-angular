import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostService} from './services/post.service';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import {RouterPostModule} from './router-post.module';
import {SharedModule} from '../shared/shared.module';



@NgModule({
  declarations: [AllPostsComponent],
  imports: [
    CommonModule,
    RouterPostModule,
    SharedModule
  ],
  providers: [PostService]
})
export class PostModule { }
