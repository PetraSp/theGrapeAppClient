import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ApiService {
  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}
  getWines() {
    return this.http.get(`${this.BASE_URL}/api/wine-entries`)
                    .map((res) => res.json());
  }
  getOneWine(id) {
    return this.http.get(`${this.BASE_URL}/api/wine-entries/${id}`)
                    .map((res) => res.json());
  }

  getUsers() {
    return this.http.get(`${this.BASE_URL}/api/user-entries`)
                    .map((res) => res.json());
  }
  getOneUser(id) {
    return this.http.get(`${this.BASE_URL}/api/user-entries/${id}`)
                    .map((res) => res.json());
  }

  addUser(user) {
    // let headers = new Headers({ 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmU3ZGJlNzg0MGY1Y2E4ZjhjZmFmZiIsInVzZXIiOiJ0aG9yIiwiaWF0IjoxNTAxMzIxNzkxfQ.T4N3dVLQ7p7E7STy7Pm_BsMtFE494JaqhMf-BfWiz6k' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/api/user-entries`, user)
      .map((res) => res.json())
  }

  getTastings() {
    return this.http.get(`${this.BASE_URL}/api/tasting-entries`)
                    .map((res) => res.json());
  }
  getOneTasting(id) {
    return this.http.get(`${this.BASE_URL}/api/tasting-entries/${id}`)
                    .map((res) => res.json());
  }

  addTasting(tasting) {
    // let headers = new Headers({ 'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5MmU3ZGJlNzg0MGY1Y2E4ZjhjZmFmZiIsInVzZXIiOiJ0aG9yIiwiaWF0IjoxNTAxMzIxNzkxfQ.T4N3dVLQ7p7E7STy7Pm_BsMtFE494JaqhMf-BfWiz6k' });
    // let options = new RequestOptions({ headers: headers });
    return this.http.post(`${this.BASE_URL}/api/tasting-entries`, tasting)
      .map((res) => res.json())
  }
}
