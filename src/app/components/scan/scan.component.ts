import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  wineObject;
  wine = '';

  constructor(
    public session: SessionService,
    private api: ApiService,
    private route: Router
  ) {
  }

  ngOnInit() {
  }

  findWine(form) {
    console.log('form', form);
    this.api.getWineBySearchQuery(form.name)
    .subscribe((res) => {
      this.wineObject = res;
      this.wineObject = JSON.parse(this.wineObject._body);
      this.wine = this.wineObject[0];
      console.log('this.wine', this.wine);
    });
  }

  goToTastingIntro() {
    this.route.navigate(['/tasting/intro']);
  }

}
