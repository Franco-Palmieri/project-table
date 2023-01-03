import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService){}
  /**
   * Inserendo il CanActivate nell'app-routing attivo il componente
   * solo nel caso in cui il service mi restituisca true.
   * Con il CanActivateChild posso gestire il componente figlio.
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return this.authService.isAuthenticated();
  };

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
    return this.authService.isAdminFun();
  };
  
}
