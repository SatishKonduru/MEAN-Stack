import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  private _homePageURL = 'http://localhost:3000/api/home'
  constructor(private _http: HttpClient ) { }

  getHomePage(){
  return  this._http.get<any>(this._homePageURL)
  }
}
