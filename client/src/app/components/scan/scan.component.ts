import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {
  constructor(private session: SignupService) {}

  ngOnInit() {
  }

}
