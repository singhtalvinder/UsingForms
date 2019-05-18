import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class CampEnrollmentService {

  _url = 'http://localhost:3000/enroll'; // Your endpoint where you need to store the submitted data.

  constructor(private _http: HttpClient) { }

  //The post request method.
  enroll(user: User) {
    return this._http.post<any>(this._url, user);
    // handle the returned observable from wherever this is executed.
  } 
}
