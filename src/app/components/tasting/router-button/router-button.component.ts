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
  location = '';

  constructor(private tastingProgress: TastingProgressService, private router: Router) {
  this.location = router.url;
}

  ngOnInit() {}

  getNextRoute() {
    this.nextRoute = this.tastingProgress.goToNextRoute();
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
