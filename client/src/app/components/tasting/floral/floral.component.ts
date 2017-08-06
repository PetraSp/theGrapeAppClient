import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral',
  templateUrl: './floral.component.html',
  styleUrls: ['./floral.component.css']
})
export class FloralComponent implements OnInit {

  floralResponse: Array<string> = [];

  isActive: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  sendUserResponse(floral) {
    this.floralResponse.push(floral);
    console.log('this.floralResponse', this.floralResponse);
  }
}
