import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LocationService {

  updateRoute;

  constructor() {}

 getRoute() {
   console.log('Inside getRoute()', this.updateRoute);
   return this.updateRoute;
 }

 setRoute(route) {
   console.log('Inside setRoute()', route);
   this.updateRoute = route;
 }

}
