import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
private _dashboardURL = 'http://localhost:3000/api/dashboard'
  constructor(private _http: HttpClient) { }

  getDashboard(){
  return  this._http.get<any>(this._dashboardURL)
  }
}
