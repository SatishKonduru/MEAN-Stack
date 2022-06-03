import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() public fromParent;
  constructor() { }
@Output()  childMsg = new EventEmitter()
  ngOnInit(): void {
  }

  onClick(){
    this.childMsg.emit("This is Child Message")
  }
}
