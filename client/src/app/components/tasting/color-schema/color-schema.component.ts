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
  floralResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(ColorSchema) {
    //check if floral is in array
    console.log('ColorSchema', ColorSchema);
    const isInArray = this.floralResponse.some((userResponse) => {
      return userResponse === ColorSchema;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) { this.floralResponse.push(ColorSchema); }
    //if true, find index in array and delete
    else {
      const floralIndex = this.floralResponse.indexOf(ColorSchema);
      this.floralResponse.splice(floralIndex, 1);
    }
    console.log('this.floralResponse', this.floralResponse);
  }

  addToUserNotesObject() {
    console.log('Floral data submitted.', this.floralResponse);
    let floralData = {key: 'floral', value: this.floralResponse};
    this.userNotes.storeTastingData(floralData);
  }
}
