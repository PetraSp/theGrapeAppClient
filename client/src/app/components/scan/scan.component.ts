import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../services/tasting-progress.service';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  constructor(private currentRouteId: TastingProgressService) {}

  ngOnInit() {
  }

  goToNextRoute() {
    this.currentRouteId.goToNextRoute();
  }

  goToPreviousRoute() {
    this.currentRouteId.goToPreviousRoute();
  }

  goToBeginning() {
  this.currentRouteId.goToBeginning();
  }

  goToEnd() {

  }


}
