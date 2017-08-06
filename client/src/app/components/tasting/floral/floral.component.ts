/*jshint esversion: 6*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floral',
  templateUrl: './floral.component.html',
  styleUrls: ['./floral.component.css']
})
export class FloralComponent implements OnInit {

  floralResponse: Array<string> = [];

  isActive = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.isActive = !this.isActive;
  }

  sendUserResponse(floral) {
    // Check to see incoming variable is part of the array.
    const isInArray = this.floralResponse.some((attribute) => {
      return attribute === floral;
    });
    if (!isInArray) {
      this.floralResponse.push(floral);
    } else {
      const floralIndex = this.floralResponse.indexOf(floral);
      this.floralResponse.splice(floralIndex, 1);
    }
    console.log('this.floralResponse', this.floralResponse);
  }
}
