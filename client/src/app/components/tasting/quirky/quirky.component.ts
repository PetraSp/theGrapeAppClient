import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quirky',
  templateUrl: './quirky.component.html',
  styleUrls: ['./quirky.component.css']
})

export class QuirkyComponent implements OnInit {
  location = '';

  constructor(private _router: Router) {
    this.location = _router.url;
  }

  ngOnInit() {
  }

}
