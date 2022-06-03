import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  constructor(private _authService: AuthService, private _router: Router){}
  canActivate(){
    if(this._authService.isAdminLogin()){
    return true
    }
    else{
      this._router.navigate(['/admin/adminLogin'])
      return false
    }

  }

}
