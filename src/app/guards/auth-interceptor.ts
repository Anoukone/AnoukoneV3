import { UserService } from './../register/user-service';
import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class AUthInterceptor implements HttpInterceptor {

  constructor(private authService: UserService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.authService.getToken()
    const authRequest = req.clone({
      headers: req.headers.set('Authorization', 'Beared' + authToken)
    })
    return next.handle(authRequest)
  }


}


