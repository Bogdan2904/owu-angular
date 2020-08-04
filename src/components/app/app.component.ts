import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent {

  users: any[];
  constructor(private httpClient: HttpClient) {
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/users').subscribe(usersArr => this.users = usersArr);
  }
}
