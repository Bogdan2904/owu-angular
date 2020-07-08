import {Component, Input, OnInit} from '@angular/core';
import {AlbomService} from '../../modules/albom/albom.service';
import {IUser} from '../../Interfases/user.interface';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private albumService: AlbomService) {
  }


  @Input()
  user: IUser;

  ngOnInit(): void {
  }

  getAllAlbumBySingleUser(userId: number): void {
    this.albumService
      .getAllAlbumBySingleUser(userId).subscribe(albumsArr => this.user.albums = albumsArr);
  }

}
