import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {API} from '../app.api';
import {User} from '../model/user';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  headers = new HttpHeaders({'Content-Type' : 'application/json', 'Cache-Control': 'no-cache'});

  constructor(private http: HttpClient, private coockie: CookieService) {
  }

  login(user: User, callback) {
    this.http.post(API + '/login', JSON.stringify(user), {headers: this.headers, observe: 'response'})
      .subscribe(resp => {
        this.coockie.set('TOKEN', resp.headers.get('authorization'));
        callback(resp.status);
      }, resp => {
        callback(resp.status);
      });
  }

}
