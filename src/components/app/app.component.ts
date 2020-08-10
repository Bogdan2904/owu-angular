import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {DataService} from './data.service';


@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.css`]
})
export class AppComponent implements OnInit{

  counter = 0;

  constructor(private dataService: DataService) {
  }
  ngOnInit(): void {
    console.log('ngOnInit ');
    this.dataService.changeState({number: this.counter});
  }
  readChildValue(result: number): void {
    this.counter = result;
    this.dataService.changeState({number: this.counter});
  }
}
