import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

@Injectable()
export class UniversalInterceptorService implements HttpInterceptor {

  constructor(
    @Optional() @Inject('serverUrl') protected serverUrl: string
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(`intercepting the url ${req.url}`);
    const serverReq = !this.serverUrl ? req : req.clone({
      url: `${this.serverUrl}${req.url}`
    });

    return next.handle(serverReq);
  }
}
