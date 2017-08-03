import { Injectable } from '@angular/core';

@Injectable()
export class TastingProgressService {
  routes: [
    'appearance',
    'nose',
    'palate'
  ];

  currentRouteId= 0;

  constructor() { }
  goToNextRoute() {
      this.currentRouteId++;
      console.log(`Count is now ${this.currentRouteId}`);
  }

  goToPreviousRoute() {
    if (this.currentRouteId <= 0) {
      this.currentRouteId = 0;
    } else {
      this.currentRouteId--;
      console.log(`Count is now ${this.currentRouteId}`);
  }
}

  goToBeginning() {
    if (this.currentRouteId <= 0) {
      this.currentRouteId = 0;
    } else {
      this.currentRouteId--;
      console.log(`Count is now ${this.currentRouteId}`);
  }
}

  goToEnd() {
    if (this.currentRouteId <= 0) {
      this.currentRouteId = 0;
    } else {
      this.currentRouteId--;
      console.log(`Count is now ${this.currentRouteId}`);
  }

}
}
