import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/user';
import {API} from '../../app.api';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private http: HttpClient,
              private cookie: CookieService,
              private router: Router) { }

  ngOnInit() {
    this.http.get<User[]>(API + '/users', {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .subscribe(data => {
        this.users = data as User[];
      });
  }

  logout() {
    this.cookie.delete('TOKEN');
    this.router.navigate(['/login']);
  }

}
