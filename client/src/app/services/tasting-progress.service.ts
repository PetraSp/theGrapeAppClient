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
    if (this.currentRouteId >= this.routes.length -1) {
      this.test = this.routes[this.routes.length];
      // this.router.navigate([`tasting/${this.test}`])
    }
    else {
      this.currentRouteId++;
      this.test = this.routes[this.currentRouteId];
      this.router.navigate([`tasting/${this.test}`])
    }
  }

  goToPreviousRoute() {
    if (this.currentRouteId <= 0) {
      this.router.navigate(['/tasting']);
    } else {
      this.currentRouteId--;
      this.test = this.routes[this.currentRouteId];
      this.router.navigate([`tasting/${this.test}`])
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
