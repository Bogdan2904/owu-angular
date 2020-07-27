import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPostComponent } from './components/all-post/all-post.component';
import {PostService} from './services/post.service';



@NgModule({
  declarations: [AllPostComponent],
  imports: [
    CommonModule
  ],
  providers:[PostService]
})
export class PostModule { }
