import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class SessionService {

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
    // let headers = new Headers({ 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmU3ZGJlNzg0MGY1Y2E4ZjhjZmFmZiIsInVzZXIiOiJ0aG9yIiwiaWF0IjoxNTAxMzIxNzkxfQ.T4N3dVLQ7p7E7STy7Pm_BsMtFE494JaqhMf-BfWiz6k' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/api/user-entries`, this.userObject)
      .map((res) => res.json())
  }

}