import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../../services/tasting-progress.service';


@Component({
  selector: 'app-tasting-intro',
  templateUrl: './tasting-intro.component.html',
  styleUrls: ['./tasting-intro.component.css']
})
export class TastingIntroComponent implements OnInit {

  nextRoute;

  constructor(private tastingProgress: TastingProgressService) { }

  ngOnInit() {
  }

  getNextRoute() {
    this.nextRoute = this.tastingProgress.goToNextRoute();
  }
}
