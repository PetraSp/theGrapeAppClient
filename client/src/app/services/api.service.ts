import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';


@Injectable()
export class ApiService {
  // CHANGE FOR EVRY INSTANCE OF BASE_URL IN PROJECT
  BASE_URL: string = environment.API_BASE_URL;
  userQuery = '';
  wineName;

  constructor(
    private http: Http,
  ) { }

  getWines() {
    return this.http.get(`${this.BASE_URL}/api/wine-entries`)
                    .map((res) => res.json());
  }
  getOneWine(id) {
    return this.http.get(`${this.BASE_URL}/api/wine-entries/${id}`)
                    .map((res) => res.json());
  }


  getWineBySearchQuery(userQuery) {
    this.userQuery = userQuery;
    return this.http.post(`${this.BASE_URL}/api/wine-search`, {wineName: userQuery})
    .map(res => {
            console.log('Search has been sent');
            this.wineName = res;
            console.log("this.wineName", this.wineName);
            return res
          })
          // .catch(err => {console.log(err)})
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
