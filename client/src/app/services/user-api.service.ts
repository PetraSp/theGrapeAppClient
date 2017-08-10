import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class UserApiService {

  BASE_URL: string = 'http://localhost:3000';
  userObject;

  constructor(private http: Http,) { }

  getUsers() {
    return this.http.get(`${this.BASE_URL}/api/user-entries`)
                    .map((res) => res.json());
  }
  getOneUser(id) {
    return this.http.get(`${this.BASE_URL}/api/user-entries/${id}`)
                    .map((res) => res.json());
  }

  addUser(user) {
    console.log('addUser Called!', user.username);
    this.userObject = {
      username: user.username,
      password: user.password,
      email: 'String',
      city: 'String',
      avatar: 'String'
    }
    console.log('this.userObject', this.userObject)
    // let headers = new Headers({ 'Authorization': `JWT ${token}` });
    // let options = new RequestOptions({ headers: headers });

    return this.http.post(`${this.BASE_URL}/api/signup`, this.userObject)
      .map((res) => res.json())
  }


  updateUser(user) {
    console.log('updateUser Called!', user.id, user);
    return this.http.put(`${this.BASE_URL}/api/user-entries/${user.id}`, user)
      .map((res) => res.json())
  }

}