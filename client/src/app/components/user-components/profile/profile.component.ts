import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';
import { SessionService } from '../../../services/session.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {};

  constructor(
    private userApi: UserApiService,
    private session: SessionService,
  ) { }

  ngOnInit() {
    let userID = this.session.user;
    console.log("userID", userID);
    this.userApi.getOneUser(userID)
        .subscribe((userObject) => {
          this.user = userObject;
        });
    console.log(this.user);
  }

}
