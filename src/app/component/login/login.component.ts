import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {API} from '../../app.api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private httpClient: HttpClient,
              private cookie: CookieService) { }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    console.log(this.user);
    this.httpClient.post(API + '/login', this.user, { headers: new HttpHeaders({'Content-Type': 'application/json'})}).subscribe(data => {
      const response = data as HttpResponse<any>;
      this.cookie.set('TOKEN', response.headers.get('Authorization'));
    });
  }

}
