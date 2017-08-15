import { Component, OnInit } from '@angular/core';
import { TastingProgressService } from '../../services/tasting-progress.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
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
    public session: SessionService,
    private link: LinkService,
    private router: Router) {
      this.location = router.url;
  }

  ngOnInit() {
    this.link.event.subscribe((data) => {
    });
  }

  getPreviousRoute() {
    this.previousRoute = this.tastingProgress.goToPreviousRoute();
  }



}
