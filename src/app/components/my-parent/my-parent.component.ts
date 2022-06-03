import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-parent',
  templateUrl: './my-parent.component.html',
  styleUrls: ['./my-parent.component.css']
})
export class MyParentComponent implements OnInit, OnChanges , DoCheck{
public isChild = true
public myName
  constructor() {
    console.log("MyParent Constructor")
   }

  ngOnInit(): void {
    console.log("MyParent OnInit is called")
  }
  toggleChild(){
    this.isChild = !this.isChild
  }
  ngOnChanges(): void {
      console.log("MyParent OnChanges Called")
  }
  ngDoCheck(): void {
      console.log("Parent DoCheck is called")
  }

}
