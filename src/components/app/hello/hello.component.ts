import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  massage: string;

  @Output()
  xxx: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeParrentTitle(): void {
this.xxx.emit(this.massage);
  }
}
