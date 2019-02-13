import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CookieService} from 'ngx-cookie-service';
import {Injectable} from '@angular/core';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private cookie: CookieService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthTokenToRequest(req));
  }

  private addAuthTokenToRequest(req: HttpRequest<any>): HttpRequest<any> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.cookie.get('TOKEN'))
    });
    return authReq;
  }

}
