import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash'



@Injectable({
  providedIn: 'root'
})
export class InsertMobileService {

  private _mobileURL = 'http://localhost:3000/api/insertMobile'
  private _updateURL = 'http://localhost:3000/api/updateMobile'
  private _deleteURL = 'http://localhost:3000/api/deleteMobile'

  constructor(private _http: HttpClient) { }
 mobileForm: FormGroup = new FormGroup(
   {
    _id: new FormControl(null),
    mobileName: new FormControl('', Validators.required),
    mobileModel : new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    color: new FormControl('Red'),
    img: new FormControl(''),
    quantity: new FormControl('1')
   } )

   initializeFormGroup(){
     this.mobileForm.setValue({
       _id: null,
       mobileName: '',
       mobileModel:'',
       price:'',
       color: 'Red',
       img: '',
       quantity: '1'

     })
   }


   insertMobile(mobile){
  return  this._http.post<any>(this._mobileURL, mobile)
   }

  populateForm(mobile){
   // this.mobileForm.setValue(mobile)
   this.mobileForm.setValue(_.omit(mobile, '__v'))
  }

  updateMobile(mobile){
  return  this._http.patch<any>(this._updateURL, mobile)
  }

  deleteMobile(myMobile){
    if(confirm("Are you really willing to delete?")){
  return    this._http.post<any>(this._deleteURL, myMobile)
    }
  }

}
