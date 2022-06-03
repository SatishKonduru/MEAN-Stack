import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.css']
})
export class ClassBindingComponent implements OnInit {

  public myText1 = "textColor";
  myText2 = "fontSize";
  myText3 = "textStyle"
  required: boolean= true
  styleGroup = {
    "textColor" : this.required,
    "fontSize": this.required,
    "textStyle": !this.required
  }


  constructor() { }

  ngOnInit(): void {
  }

}
