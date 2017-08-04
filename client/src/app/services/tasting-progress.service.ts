import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TastingProgressService {
  routes: Array<string> = [
    'appearance',
    'nose',
    'palate'
  ];

  currentRouteId= -1;
  test;

  constructor(private router: Router) { }
  goToNextRoute() {
    console.log(this.currentRouteId);
    this.currentRouteId++;
    console.log(`Count is now ${this.currentRouteId}`);
    this.test = this.routes[this.currentRouteId];
    console.log('routes', this.routes);
    console.log('this is a test', this.test);
    this.router.navigate([`tasting/${this.test}`])
  }

  goToPreviousRoute() {
    if (this.currentRouteId <= 0) {
      this.currentRouteId = 0;
    } else {
      this.currentRouteId--;
    }
    this.test = this.routes[this.currentRouteId];
    this.router.navigate([`tasting/${this.test}`])
  }

  goToBeginningRoute() {
      this.currentRouteId = 0;
      return  this.routes[this.currentRouteId];
  }

  goToEndRoute() {
      this.currentRouteId = this.routes.length;
      return  this.routes[this.currentRouteId];
  }
}
