import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  location = '';

  constructor(private _router: Router) {
    this.location = _router.url;
  }

  ngOnInit() {
  }

  hello: boolean = false;
  // hello: boolean = this.location === 'home';
}
