import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class SignupService {

  BASE_URL: string = 'http://localhost:3000/api';

  public user = {};
  public token = '';
  public isAuth: EventEmitter<any> = new EventEmitter();
  public isAuthenticated = false;

  constructor(
    private http: Http,
    private route: Router
  ) { }

  handleError(e) {
    return Observable.throw(e.json().message);
  }

  signup(user) {
        console.log("SERVICES");
        console.log("services give me the user please", user);
        return this.http.post(`${this.BASE_URL}/signup`, user)
            .map((response) => response.json())
            .map((response) => {
                let token = response.token;
                if (token) {
                    // set token property
                    this.token = token;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', token);
                    this.isAuth.emit(true);
                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            })
            .catch((err) => Observable.throw(err));
    }

    login(username: string, password: string) {
        return this.http.post(`${this.BASE_URL}/login`, { username, password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let jsonResponse = response.json();
                let user = jsonResponse.user;
                let token = jsonResponse.token;

                if (user && token) {
                    
                    this.token = token;
                    this.user = user;
                    this.isAuthenticated = true;

                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('token', token);
                }
 
                return this.isAuthenticated;
            }).catch(this.handleError);
    }

    logout() {
        this.token = '';
        this.user = {}
        this.isAuthenticated = false;
        localStorage.removeItem('token');
    }
}
