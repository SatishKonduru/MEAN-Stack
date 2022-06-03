import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
  myStyle1 = "blue"
  myStyle2 = "italic"

  myStyleGroup = {
    color: 'red',
    fontStyle: 'italic',
    fontSize: '70px'
  }
  constructor() { }

  required = 12>3
  ngOnInit(): void {
  }



}
