import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { ProducteService } from "./producte.service";

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector: Injector) { }

  intercept(req: any, next: any) {
    let authService = this.injector.get(ProducteService);
    let tokenizedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.getToken()}`
      }
    })
    return next.handle(tokenizedReq);
  }
}
