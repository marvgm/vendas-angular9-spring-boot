import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  //intercepta todas as requisições do cliente e insere um acces_token valido para o back end(como feito no postmam)
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenString = localStorage.getItem('access_token');

    const url: string = request.url;

    //deve-se retiar a url que é usada para adquirir o token, apenas inserir nas requisições do cliente
    if (tokenString && !url.endsWith('/oauth/token')) {
      const token = JSON.parse(tokenString);
      const jwt = token.access_token;
      request = request.clone({
        setHeaders :{
          Authorization: 'Bearer '+ jwt
        }
      })
    }   
    return next.handle(request);
  }
}
