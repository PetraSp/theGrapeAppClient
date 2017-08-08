import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

<<<<<<< HEAD
  location = '';

  constructor(private _router: Router) {
    this.location = _router.url;
=======
  location;
  constructor(private _route: Router) {
    this.location = _route;
>>>>>>> a3cb6d909623f4f332e303b29a9dc65ec350a19e
  }

  ngOnInit() {
  }

  hello: boolean = true;
  // hello: boolean = this.location === 'home';
}
