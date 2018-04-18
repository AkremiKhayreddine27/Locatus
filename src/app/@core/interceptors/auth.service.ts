import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { switchMap } from 'rxjs/operators/switchMap';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private token;
  constructor(protected service: NbAuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.service.getToken()
      .pipe(
        switchMap((token: NbAuthJWTToken) => {
          if (token.isValid()) {
            const JWT = `Bearer ${token.getValue()}`;
            req = req.clone({
              setHeaders: {
                Authorization: JWT,
              },
            });
          }
          return next.handle(req);
        }),
      );
  }
}