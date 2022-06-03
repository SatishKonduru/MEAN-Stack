import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerUserData = {
    username: '',
    password: ''
  }
  constructor(private _authService: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }
  registerUser(){
    //console.log(this.registerUserData)
    this._authService.registerUser(this.registerUserData)
    .subscribe(res=> {
      console.log(res)
      localStorage.setItem('token', res.token)
      this._router.navigate(['/dashboard'])
    })
  }

}
