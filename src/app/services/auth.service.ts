import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private _registerUserURL = 'http://localhost:3000/api/register'
private _loginUserURL = 'http://localhost:3000/api/login'
private _adminLoginURL = 'http://localhost:3000/api/adminLogin'

cartSubject = new Subject<any>()

public currentUser= ''
  constructor(private _http: HttpClient, private _router: Router) { }

  registerUser(user){
  return this._http.post<any>(this._registerUserURL,user )
  }

  loginUser(user){
   return this._http.post<any>(this._loginUserURL, user)
  }

  isLoggedIn(){
  return  !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token')
  }

  logoutUser(){
    localStorage.removeItem('token')
    this._router.navigate(['/home'])
    this.currentUser = ''
  }

  setCurrentUser(user){
this.currentUser = user
  }

  isAdminLogin(){
    return !!localStorage.getItem('adminToken')
  }

  adminLogin(admin){
  return  this._http.post<any>(this._adminLoginURL, admin)
  }

  getAdminToken(){
    return localStorage.getItem('adminToken')
  }

}
