import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList;

  constructor(private userApi: UserApiService,) { }

  ngOnInit() {
    this.userApi.getUsers()
      .subscribe((userList) => {
        this.userList = userList;
      });
  }

}
