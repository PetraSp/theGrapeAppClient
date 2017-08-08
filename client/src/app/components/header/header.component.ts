import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../services/tasting-progress.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  previousRoute;
  location = '';

  constructor(private tastingProgress: TastingProgressService, private _router: Router) {
    this.location = _router.url;
  }

  ngOnInit() {
  }

  getPreviousRoute() {
    this.previousRoute = this.tastingProgress.goToPreviousRoute();
  }

}
