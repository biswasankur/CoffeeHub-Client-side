import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
// export class InterceptorService {
export class InterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authServeice = this.injector.get(StorageService)
    let tokenizedReq = req.clone({
      setHeaders: {
        'x-access-token': `${authServeice.getToken()}`
      }
    })
    return next.handle(tokenizedReq)
  }
}
