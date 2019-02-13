import {Routes} from '@angular/router';
import {LoginComponent} from './component/login/login.component';
import {AuthGuard} from './app.guard';
import {HomeComponent} from './component/home/home.component';
import {UsersComponent} from './component/users/users.component';

export const ROUTES: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
]
