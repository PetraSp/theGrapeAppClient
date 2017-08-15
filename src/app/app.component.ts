import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'theGrapeApp';
location;

  constructor(private route: Router) {
    this.location = route.url;
    console.log(this.location)
  }

  ngOnInit () {}


}
