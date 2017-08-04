import { Injectable } from '@angular/core';

@Injectable()
export class TastingProgressService {
  routes: Array<string> = [
    'appearance',
    'nose',
    'palate'
  ];

  currentRouteId= -1;
  currentRouteName;

  constructor() { }
  goToNextRoute() {
    console.log(this.currentRouteId);
    this.currentRouteId++;
    console.log(`Count is now ${this.currentRouteId}`);
    let test = this.routes[this.currentRouteId];
    console.log('routes', this.routes);
    console.log("this is a test", test);
    return test;
  }

  goToPreviousRoute() {
    if (this.currentRouteId <= 0) {
      this.currentRouteId = 0;
    }
    else {
      this.currentRouteId--;
      console.log(`Count is now ${this.currentRouteId}`);
      return  this.routes[this.currentRouteId];
    }
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
