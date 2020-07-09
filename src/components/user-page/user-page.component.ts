import {Component, OnInit} from '@angular/core';
import {PostService, UserService} from '../../modules';
import {ActivatedRoute} from '@angular/router';
import {IUser} from '../../Interfases/user';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  user: IUser;
  constructor(private userService: UserService, private activatedRoute: ActivatedRoute, private postService: PostService) {
    this.activatedRoute.params.subscribe(value => {
      this.userService.getSingleUserById(value.id).subscribe(userValue => {
        this.postService.getPostsBySingleUser(value.id).subscribe(postsArr => {
          userValue[0].posts = postsArr;
        });
        this.user = userValue[0];
      });
    });
  }

  ngOnInit(): void {
  }

}
