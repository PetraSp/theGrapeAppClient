import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../../services/tasting-progress.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-button',
  templateUrl: './router-button.component.html',
  styleUrls: ['./router-button.component.css']
})
export class RouterButtonComponent implements OnInit {

  nextRoute;
  previousRoute;
  startRoute;
  endRoute;
  constructor(private tastingProgress: TastingProgressService, private router: Router) { }

  ngOnInit() {

  }
  getNextRoute() {


    console.log('before!', this.nextRoute);
      this.nextRoute = this.tastingProgress.goToNextRoute();

  //  this.nextRoute = this.tastingProgress.goToNextRoute();
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
