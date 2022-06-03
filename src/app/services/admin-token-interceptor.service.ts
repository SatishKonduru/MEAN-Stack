import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminTokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector) { }

intercept(req, next){
  let authService = this._injector.get(AuthService)
  let adminTokenReq = req.clone({
    setHeaders: {
      authorization: `bearer ${authService.getAdminToken()}`
    }
  })
  return next.handle(adminTokenReq)
}

}
