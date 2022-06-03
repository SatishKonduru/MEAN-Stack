import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

   myName = 'Satish'
   abc = 10
   myLocation: string = window.location.href
  constructor() { }

  ngOnInit(): void {
  }

  getMyName(){
   return this.myName = "Nag"
  }

}
