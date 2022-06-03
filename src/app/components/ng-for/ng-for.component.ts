import { Component, OnInit, ReflectiveKey } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
public names=['Satish','Konduru','Renuka','RSK','Chikkie', 'Micky']

myValues = [
  {
  number: 1,
  name: 'Ricky',
  age: 10
},
{
  number: 2,
  name: 'Preethi',
  age: 25
},
{
  number: 3,
  name: 'Lavanya',
  age: 24
},
]
  constructor() { }

  ngOnInit(): void {
  }

}
