import { Component, OnInit } from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    console.log(this.dataService.showStateOnConsole());
  }

}
