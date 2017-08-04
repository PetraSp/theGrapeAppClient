import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../services/tasting-progress.service';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.component.html',
  styleUrls: ['./tasting.component.css']
})
export class TastingComponent implements OnInit {

  nextRoute = 'appearance';
  previousRoute;
  startRoute;
  endRoute;
  constructor(private tastingProgress: TastingProgressService) { }

  ngOnInit() {
    console.log('dbgjkñabsdjñgjasñhd<gh');
  }

  getNextRoute() {
    console.log('before!', this.nextRoute);
    this.nextRoute = this.tastingProgress.goToNextRoute();
    console.log('after', this.nextRoute);
    return this.nextRoute;
  }
  getPreviousRoute() {
    this.previousRoute = this.tastingProgress.goToPreviousRoute();
  }
  getStartRoute() {
    this.startRoute = this.tastingProgress.goToBeginningRoute();
  }
  getEndRoute() {
    this.endRoute = this.tastingProgress.goToEndRoute();
  }
}
