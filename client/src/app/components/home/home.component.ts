import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userList;

  constructor(private session: SessionService,) { }

  ngOnInit() {
    this.session.getUsers()
      .subscribe((userList) => {
        this.userList = userList;
      });
  }

}
