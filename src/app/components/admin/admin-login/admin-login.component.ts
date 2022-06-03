import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoginErrorComponent } from '../../login-error/login-error.component';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginAdminData = {
    username:'',
    password:''
  }
  constructor(private _authService: AuthService, private _router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  AdminLogin(){
this._authService.adminLogin(this.loginAdminData)
.subscribe(res => {
  localStorage.setItem('adminToken', res.token)
  this._authService.setCurrentUser(this.loginAdminData.username)
  this._router.navigate(['/admin/adminDashboard'])
},
err=>{
  console.log("error: "+err)
  let dialogRef = this.dialog.open(LoginErrorComponent)
  dialogRef.afterClosed().subscribe(res => {
    if(res === 'true'){
      this._router.navigate(['/admin/adminLogin'])
    }
    else{
      this._router.navigate(['/home'])
    }
  })
}
)
  }

}
