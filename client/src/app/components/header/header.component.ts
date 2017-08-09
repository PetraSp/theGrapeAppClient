import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../services/tasting-progress.service';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  location;
  previousRoute;
  title = 'The Grape App';

  constructor(
    private tastingProgress: TastingProgressService, 
    private session: SignupService,
    private link: LinkService) {
  }

  ngOnInit() {
    this.link.event.subscribe((data) => {
      console.log("Our data!!!!", data);
    });
  }

  getPreviousRoute() {
    this.previousRoute = this.tastingProgress.goToPreviousRoute();
  }



}
