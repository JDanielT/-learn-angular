import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.user = new User();
  }

  login() {
    this.auth.login(this.user, (status) => {
      if (status === 200) {
        this.router.navigate(['/users']);
        return;
      }
      alert('Usuário ou senha inválida');
    });
  }


}
