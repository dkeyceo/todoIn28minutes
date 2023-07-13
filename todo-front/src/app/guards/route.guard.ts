import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodedAuthService } from '../services/hardcoded-auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {

  constructor(private hardcodedAuthService: HardcodedAuthService,
    private router: Router) {


  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(!this.hardcodedAuthService.isUserLoggedIn()){
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
