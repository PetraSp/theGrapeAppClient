import { Injectable } from '@angular/core';

@Injectable()
export class TastingProgressService {
  routes: [
    'appearance',
    'nose',
    'palate'
  ];

  currentRouteId= 0;
  currentRouteName;

  constructor() { }
  goToNextRoute() {
      this.currentRouteId++;
    console.log(`Count is now ${this.currentRouteId}`);
    return  this.routes[this.currentRouteId];
  }

  goToPreviousRoute() {
    if (this.currentRouteId <= 0) {
      this.currentRouteId = 0;
    } else {
      this.currentRouteId--;
    console.log(`Count is now ${this.currentRouteId}`);
    return  this.routes[this.currentRouteId];
  }
}

  goToBeginning() {
      this.currentRouteId = 0;
      return  this.routes[this.currentRouteId];
}

  goToEnd() {
      this.currentRouteId = this.routes.length;
      return  this.routes[this.currentRouteId]; 
}
}
