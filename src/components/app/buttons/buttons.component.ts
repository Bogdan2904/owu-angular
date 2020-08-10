import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {


  constructor(private dataService: DataService) {
  }

  @Output()
  newNumber: EventEmitter<number> = new EventEmitter<number>();

  ngOnInit(): void {
  }

  inc(): void {
    this.newNumber.emit(this.dataService.getState() + 1);
  }

  dec(): void {
    this.newNumber.emit(this.dataService.getState() - 1);
  }
}
