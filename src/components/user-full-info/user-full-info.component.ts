import {Component, OnInit} from '@angular/core';
import {PostService, UserService} from '../../services';
import {IUser} from '../../Interfases/user';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-full-info',
  templateUrl: './user-full-info.component.html',
  styleUrls: ['./user-full-info.component.css']
})
export class UserFullInfoComponent implements OnInit {

  user: IUser;

  // constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private postService: PostService) {
  //   this.activatedRoute.params.subscribe(value => {
  //     this.userService.getSingleUserById(value.id).subscribe(userValue => {
  //       this.postService.getPostsBuSingleUser(value.id).subscribe(postsArr => {
  //         userValue[0].posts = postsArr;
  //       });
  //       this.user = userValue[0];
  //     });
  //   });
  // }

  // constructor(private route: Router) {
  //   console.log(route.getCurrentNavigation().extras.state.user);
  // }

  constructor(private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      console.log(history.state);
      this.user = history.state.user;
      if (!!this.user) {
          this.activatedRoute.data.subscribe(valuePost => this.user.posts = valuePost.postsArr);
      }
    });
  }


  ngOnInit(): void {
  }

}
