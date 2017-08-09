import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  constructor(private session: SessionService) {}

  ngOnInit() {
  }

  findWine(form) {
    console.log("form", form);
  }
}
