import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
constructor(private _injector: Injector){}
  intercept(req, next)  {
    let authService = this._injector.get(AuthService)
      let tokenizedReq = req.clone({
        setHeaders: {
          authorization:`Bearer ${authService.getToken()}`
        }
      })
      return next.handle(tokenizedReq)
  }

}
