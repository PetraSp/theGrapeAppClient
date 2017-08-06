import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';

@Component({
  selector: 'app-floral',
  templateUrl: './floral.component.html',
  styleUrls: ['./floral.component.css']
})
export class FloralComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  floralResponse = [];

  constructor(
    private userNotes: UserNotesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(floral) {
    //check if floral is in array
    console.log('floral', floral);
    const isInArray = this.floralResponse.some((userResponse) => {
      return userResponse === floral;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) { this.floralResponse.push(floral); }
    //if true, find index in array and delete
    else { 
      const floralIndex = this.floralResponse.indexOf(floral);
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
