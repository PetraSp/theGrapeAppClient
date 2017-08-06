import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.css']
})
export class TastingComponent implements OnInit {
location = '';

constructor(private _router:Router) {
  this.location = _router.url;
}

  ngOnInit() {}

}
