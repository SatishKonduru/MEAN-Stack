import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  public msg = ''
  constructor() { }

  ngOnInit(): void {
  }

  onClick(data){
    //console.log("Satish - You clicked this Button")
this.msg = `${data} - You clicked this Button`


  }

}
