import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicAuthService } from '../basic-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService  implements HttpInterceptor{

  constructor(private basicAuthService: BasicAuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    // let username = 'dkey';
    // let password = 'dkey';
    // let basicAuthHeaderString = 'Basic '+ btoa(username + ':' + password);
    let basicAuthHeaderString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    if(basicAuthHeaderString && username) {
    req = req.clone({
      setHeaders: {
        Authorization: basicAuthHeaderString
      }
    });
  }
    return next.handle(req);
  }
}
