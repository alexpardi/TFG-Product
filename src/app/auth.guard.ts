import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ProducteService } from './servei/producte.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _authService: ProducteService, private router: Router) {
  }

  canActivate(): boolean{
    if (this._authService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['/login']);
      return false;
    }
  }
}
