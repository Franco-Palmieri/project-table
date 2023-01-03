import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  isAdmin = false;

  constructor() {

  }
  
  isAuthenticated(){
    return this.isLoggedIn = true;
  };

  isAdminFun(){
    return this.isAdmin = true;
  }
}
