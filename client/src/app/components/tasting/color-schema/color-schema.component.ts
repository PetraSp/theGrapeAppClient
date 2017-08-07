/*jshint esversion: 6*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';

@Component({
  selector: 'app-color-schema',
  templateUrl: './color-schema.component.html',
  styleUrls: ['./color-schema.component.css']
})
export class ColorSchemaComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  colorResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(colorName, colorRange) {
    console.log(colorName, colorRange)
    const colorRangeArray =[colorName, colorRange];

    if (this.colorResponse.length === 1) {
      this.colorResponse.shift();
    }
    this.colorResponse.push(colorRangeArray)

    console.log(JSON.stringify(this.colorResponse))
  }

  addToUserNotesObject() {
    console.log('Floral data submitted.', this.colorResponse);
    let floralData = {key: 'floral', value: this.colorResponse};
    this.userNotes.storeTastingData(floralData);
  }
}
