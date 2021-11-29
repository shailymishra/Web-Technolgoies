import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {



    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       console.log('incertperpp');
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        // Handle response
        return next.handle(request);
    }

}
