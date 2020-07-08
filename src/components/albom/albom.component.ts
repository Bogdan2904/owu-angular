import {Component, Input, OnInit} from '@angular/core';
import {IAlbom} from '../../Interfases/albom.interface';
import {PhotoService} from '../../modules/photo/photo.service';

@Component({
  selector: 'app-albom',
  templateUrl: './albom.component.html',
  styleUrls: ['./albom.component.css']
})
export class AlbomComponent implements OnInit {

  @Input()
  album: IAlbom;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit(): void {
  }

  getAllPhotosBySingleAlbum(albumId: number): void {
    this.photoService
      .getAllPhotoByOneAlbum(albumId).subscribe(photosArr => this.album.photos = photosArr);
  }

}
