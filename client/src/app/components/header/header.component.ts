import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../services/tasting-progress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  location;
  previousRoute;
  title = 'The Grape App';

  constructor(private tastingProgress: TastingProgressService) {
  }

  ngOnInit() {
  }

  getPreviousRoute() {
    this.previousRoute = this.tastingProgress.goToPreviousRoute();
  }

}
