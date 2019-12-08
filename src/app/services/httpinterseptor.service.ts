import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../components/login/auth.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class HttpinterseptorService implements HttpInterceptor {

  constructor(
    private authenticationService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const authReq = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Basic ${window.btoa("test@ir.com:test")}`
      })
    });
    return next.handle(authReq);


  //   if (this.authenticationService.isUserLoggedIn() && req.url.indexOf('basicauth') === -1) {
  //     if (this.authenticationService.username == undefined) {
  //       this.authenticationService.logout();
  //       this.router.navigate([''])
  //     } else {
  //       const authReq = req.clone({
  //         headers: new HttpHeaders({
  //           'Content-Type': 'application/json',
  //           'Authorization': `Basic ${window.btoa(this.authenticationService.username + ":" + this.authenticationService.password)}`
  //         })
  //       });
  //       return next.handle(authReq);
  //     }
  //   } else {
  //     return next.handle(req);
  //   }
  }
}
