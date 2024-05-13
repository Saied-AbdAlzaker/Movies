import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request.clone({
      url: request.url.replace('api_key=','api_key=f3c2bced7c53c231a436c80bc36307b5')
    })
    return next.handle(newRequest);
  }
}
