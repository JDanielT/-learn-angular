import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import { LoginComponent } from './component/login/login.component';
import {CookieService} from 'ngx-cookie-service';
import { UsersComponent } from './component/users/users.component';
import { HomeComponent } from './component/home/home.component';
import {Interceptor} from './app.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: Interceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
