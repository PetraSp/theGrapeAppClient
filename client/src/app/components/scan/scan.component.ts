import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  constructor(
    private session: SessionService,
    private api: ApiService
  ) {}

  ngOnInit() {
  }

  findWine(form) {
    console.log("form", form);
    this.api.getWineBySearchQuery(form.name)
    .subscribe(res => console.log(res))
    // .catch(err => console.log(err))

  }
}
