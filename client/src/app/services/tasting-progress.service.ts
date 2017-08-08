import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class TastingProgressService {
  routes: Array<string> = [
    'intro',
    'appearance/instructions',
    'appearance/colorSchema',
    'nose/instructions',
    'nose/floral',
    'nose/redFruit',
    'nose/blackFruit',
    'nose/driedFruit',
    'nose/herbs',
    'nose/quirky',
    'palate/instructions',
    'palate/floral',
    'palate/redFruit',
    'palate/blackFruit',
    'palate/driedFruit',
    'palate/herbs',
    'palate/quirky',
  ];

  currentRouteId= 0;
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
      this.router.navigate(['/tasting/intro']);
  }

  goToEndRoute() {
      this.currentRouteId = this.routes.length;
      this.router.navigate(['/tasting/palate/quirky']);
  }
}
