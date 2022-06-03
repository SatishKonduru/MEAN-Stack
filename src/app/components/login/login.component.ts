import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginErrorComponent } from '../login-error/login-error.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData = {
  username: '',
  password: ''
}
  constructor(private _auth: AuthService, private _router: Router, public dialog : MatDialog) { }

  ngOnInit(): void {
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData)
    .subscribe(res => {
      console.log(res)
      localStorage.setItem('token', res.token)
      this._auth.setCurrentUser(this.loginUserData.username)
      this._router.navigate(['/dashboard'])
    },
    err => {
     let dialogRef =  this.dialog.open(LoginErrorComponent)
     dialogRef.afterClosed().subscribe(res => {
       console.log(`Dialog box result: ${res}`)
       if(res == 'true'){
         this.loginUserData.username = ''
         this.loginUserData.password = ''
         this._router.navigate(['/login'])
       }
       else{
         this._router.navigate(['/home'])
       }
     })
    })
  }

}
