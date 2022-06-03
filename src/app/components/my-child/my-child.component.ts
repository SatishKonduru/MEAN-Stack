import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.component.html',
  styleUrls: ['./my-child.component.css']
})
export class MyChildComponent implements OnInit, OnDestroy , OnChanges, DoCheck{

  @Input() myName

  constructor() {
    console.log("MyChild Constructor")
   }
public counter = 0
public myInterval: any
  ngOnInit(): void {
    console.log("MyChild OnInit is called")
  //  this.myInterval= setInterval(()=> {
  //     this.counter = this.counter+1
  //     console.log(this.counter)
  //   }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.myInterval)
      console.log("MyChild OnDestroy is called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
        console.log("MyChild OnChanges is Called")
  }
  ngDoCheck(): void {
    console.log("Child DoCheck is called")
}
}
