import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AdminRegisterService {

  private _adminRegURL ='http://localhost:3000/api/adminRegister'
  constructor(private _http: HttpClient) { }

  adminForm: FormGroup = new FormGroup(
    {
      _id : new FormControl(null),
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
      city: new FormControl(''),
      gender: new FormControl('1'),
      username: new FormControl(''),
      password: new FormControl(''),
      isAdmin: new FormControl(true)
    }
  )

  initializeFormGroup(){
    this.adminForm.setValue({
      _id: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      username: '',
      password: '',
      isAdmin: true
    })
  }

 insertAdmin(admin){
  return  this._http.post<any>(this._adminRegURL, admin)
 }



}
