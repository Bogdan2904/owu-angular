import {Component, Input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../../Interfases/post';
import {User} from '../../Interfases/user';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  // private http: HttpClient;
  //
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  users: User[];
  comments: any[];

  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(usersArr => {
        usersArr.forEach(user => {
            user['posts'] = [];
            this.httpClient
              .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
              .subscribe(postArr => {
                postArr.forEach(post => {
                  if (post.userId === user.id) {
                    user.posts.push(post);
                  }
                });
              });
          }
        );
        this.users = usersArr;
      });
  }
}
