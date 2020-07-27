import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../../interfaces/IUser';
import {IComment} from '../../interfaces/IComment';
import {IPost} from '../../interfaces/IPost';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  objArr: any[];

  constructor() {
  }

  ngOnInit(): void {
  }

}
