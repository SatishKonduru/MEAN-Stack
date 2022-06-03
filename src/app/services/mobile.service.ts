import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  private _mobileURL = 'http://localhost:3000/api/mobiles'
  constructor(private _http: HttpClient) { }
  getMobiles(){
  return  this._http.get<any>(this._mobileURL)
  }
}
