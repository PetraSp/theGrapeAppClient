import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.css']
})
export class TastingComponent implements OnInit {

location;

constructor(private _router: Router, private link: LinkService) {
  this.location = _router.url;
  console.log(this.location);
}

aFunc() {
  this.link.publish(this.location);
}

  ngOnInit() {}



}
