import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokenService } from './jwt-token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuardService implements CanActivate {

  constructor(private jwtService: JwtTokenService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree{
    if (this.jwtService.getEmailId()) {
      if (this.jwtService.isTokenExpired()) {
        //this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    } else {
      alert('Utente non autenticato.');
      //this.router.navigate(['/login']);
      return false;
    }
  }
}
