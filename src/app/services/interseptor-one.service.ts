import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { DoCheck, Injectable, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { Retry } from '../app.component';

@Injectable({
  providedIn: 'root'
})

export class InterseptorOneService implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const newreq=req.clone({
      headers:new HttpHeaders({Authorization:'TOken'})
    })
    
    return next.handle(newreq)
  }
  constructor() { }
  
}
export const providers:Provider[]=[{provide:HTTP_INTERCEPTORS,useClass:InterseptorOneService,multi:true}]
