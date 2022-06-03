import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  public course =  []
  selectedId;
public errMsg ;
  constructor( private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit() {


    this._activatedRoute.paramMap.subscribe((params : ParamMap) => {
      this.selectedId = parseInt(params.get('id'))
    })


  }
  onSelect(x){
    //this._router.navigate(['/courseDetails', x.id])
    this._router.navigate([x.id], {relativeTo: this._activatedRoute})
  }

  isSelected(x){
  return  x.id === this.selectedId
  }



  }
