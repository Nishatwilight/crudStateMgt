import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/orders';

  constructor(public http: HttpClient) { }
   
  login(credentials: any): Observable<any>{
    console.log('credentialasdddddddddddds', credentials);
    
    const { username, password } = credentials;

    return this.http.get(`http://localhost:3000/users`)
  }
   orders(): Observable<any>{
     return this.http.get(this.apiUrl);
   }

   payment(): Observable<any>{
    return this.http.get(`http://localhost:3000/payment`)
   }

}
