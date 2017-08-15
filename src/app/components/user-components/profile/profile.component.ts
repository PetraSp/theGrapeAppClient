import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../../../services/user-api.service';
import { SessionService } from '../../../services/session.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = {};

  constructor(
    private userApi: UserApiService,
    public session: SessionService,
    private router: Router,
  ) { }

  ngOnInit() {
    let userID = this.session.user;
    console.log("userID", userID);
    this.userApi.getOneUser(userID)
        .subscribe((userObject) => {
          this.user = userObject;
        });
    console.log(this.user);

    if (this.session.isAuthenticated) {
      return;
    } else {
      this.router.navigate(['./login']);
    }
  }

}
