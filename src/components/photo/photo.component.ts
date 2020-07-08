import {Component, Input, OnInit} from '@angular/core';
import {IPhotos} from '../../Interfases/photos.interface';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }

  @Input()
  photo: IPhotos;
  ngOnInit(): void {
  }

}
