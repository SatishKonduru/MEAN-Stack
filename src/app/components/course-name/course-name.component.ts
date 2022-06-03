import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-name',
  templateUrl: './course-name.component.html',
  styleUrls: ['./course-name.component.css']
})
export class CourseNameComponent implements OnInit {
public course =  []
public errorMessage;
  constructor( ) { }

  ngOnInit() {

  }

}
