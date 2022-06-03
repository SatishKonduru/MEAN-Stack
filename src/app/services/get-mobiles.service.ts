import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMobilesService {
private _getMobilesURL = 'http://localhost:3000/api/getMobiles'
  constructor(private _http: HttpClient) { }

getMobiles(){
return  this._http.get<any>(this._getMobilesURL)
}

}
