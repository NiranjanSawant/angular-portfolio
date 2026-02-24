import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
    catchError((error:HttpErrorResponse)=>{
      let errormsg="SOmething went wrong"
     
      if(error.error instanceof ErrorEvent)
      {
        errormsg=error.error.message;
      }
      else
      {
        switch(error.status)
        {
          case 400:
            errormsg=error.error?.message || 'Bad Request';
            break;

          case 401:
              errormsg = 'Unauthorized access';
              this.router.navigate(['/login']);
              break;

            case 403:
              errormsg = 'Access denied';
              break;

            case 404:
              errormsg = 'Resource not found';
              break;

            case 500:
              errormsg = 'Internal server error';
              break;  

           default:
              errormsg = `Error Code: ${error.status}`; 
        }
      }

      alert(errormsg);
  
      return throwError(()=>error);
    })

    );
  }
}
