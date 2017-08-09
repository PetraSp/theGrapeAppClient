/*jshint esversion: 6*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';
import { TastingProgressService } from '../../../services/tasting-progress.service';


@Component({
  selector: 'app-floral',
  templateUrl: './floral.component.html',
  styleUrls: ['./floral.component.css']
})
export class FloralComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  floralResponse = [];
  location = '';
  nextRoute;

  constructor(private userNotes: UserNotesService, private router: Router, private tastingProgress: TastingProgressService) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  getNextRoute() {
    this.nextRoute = this.tastingProgress.goToNextRoute();
  }

  // define toggle function for button
  userInputToggle(floral) {
    // check if floral is in array
    console.log('floral', floral);
    const isInArray = this.floralResponse.some((userResponse) => {
      return userResponse === floral;
    });
    console.log('isInArray', isInArray);
    // if false, add
    if (!isInArray) {
      this.floralResponse.push(floral);
      if (this.floralResponse[this.floralResponse.length-1] === 'none') {
        this.floralResponse = [''];
        console.log("working");
      }
    }
      // if true, find index in array and delete
      else {
        const floralIndex = this.floralResponse.indexOf(floral);
        this.floralResponse.splice(floralIndex, 1);
      }
      console.log('this.floralResponse', this.floralResponse);
    }

  addToUserNotesObject() {
    // Slice and dice URL to get the group type from route
    const sliceLocation = this.location.slice(9);
    const parsedLocation = sliceLocation.match("/(?=[^/]*$)");
    const group = sliceLocation.slice(0, parsedLocation.index);
    const keyValue = sliceLocation.match("([^/]+$)");
    console.log("group:", group);

    console.log('User data submitted.', this.floralResponse);
    let floralData = { group: group,
                      value: { key: keyValue[0],
                               value: this.floralResponse }};

    console.log('floralData:', JSON.stringify(floralData));
    console.log('Mr Key:', Object.keys(floralData).join(''));
    this.userNotes.storeTastingData(floralData);
  }
}
