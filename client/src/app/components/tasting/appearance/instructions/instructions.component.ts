import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  location = '';

  constructor(private _router: Router) {
    this.location = _router.url;
  }

  ngOnInit() {
  }

}
