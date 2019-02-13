import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../../model/user';
import {API} from '../../app.api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<User[]>(API + '/users', {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .subscribe(data => {
        this.users = data;
      });
  }

}
