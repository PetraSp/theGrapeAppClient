import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../../../services/user-api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: any = {};

  constructor(
    private userApi: UserApiService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onSubmit(user) {
    console.log('Form submitted.', user);
    this.userApi.addUser(user)
        .subscribe(
          data => {
            console.log('Registration successful');
            this.router.navigate(['login']);
          },
          error => {
            console.log(error);
          });
  }

}
