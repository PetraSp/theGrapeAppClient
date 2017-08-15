import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TastingProgressService } from '../../../services/tasting-progress.service';


@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})

export class InstructionsComponent implements OnInit {

  location = '';
  nextRoute;

  constructor(private _router: Router, private tastingProgress: TastingProgressService) {
    this.location = _router.url;
  }

  ngOnInit() {
  }

  getNextRoute() {
    this.nextRoute = this.tastingProgress.goToNextRoute();
  }

}
