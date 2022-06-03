import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent implements OnInit {
public courseId;
  constructor(private _activatedRoute: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
  // this.courseId =  parseInt(this._activatedRoute.snapshot.paramMap.get('id'))
  //this.courseId =  this._activatedRoute.snapshot.paramMap.get('name')
  this._activatedRoute.paramMap.subscribe((params: ParamMap) => {
    let id = parseInt(params.get('id'))
    this.courseId = id
  })
  }

  goBack(){
    let previousId = this.courseId - 1;
    this._router.navigate(['/selectedCourse', previousId])
  }
  goNext(){
    let nextId = this.courseId + 1;
    this._router.navigate(['/selectedCourse', nextId])
  }

  goToDetails(){
    let selectedId = this.courseId
   // this._router.navigate(['/courseDetails', {id: selectedId}])
    this._router.navigate(['../', {id: selectedId}], {relativeTo: this._activatedRoute})
  }

  showDuration(){
    this._router.navigate(['duration'], {relativeTo: this._activatedRoute})
  }
  showTutor(){
    this._router.navigate(['courseTutor'], {relativeTo: this._activatedRoute})
  }

}
