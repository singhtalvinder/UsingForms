import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from './user';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CampEnrollmentService {

  _url = 'http://localhost:3000/enroll'; // Your endpoint where you need to store the submitted data.

  constructor(private _http: HttpClient) { }

  //The post request method.
  enroll(user: User) {
    // handle the returned observable from wherever this is executed.
    return this._http.post<any>(this._url, user)
    .pipe(catchError( this.errorHandler))
    
  } 

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);    
  }

}
