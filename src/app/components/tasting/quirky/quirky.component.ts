import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';
import { SessionService } from '../../../services/session.service';
import { TastingProgressService } from '../../../services/tasting-progress.service';


@Component({
  selector: 'app-quirky',
  templateUrl: './quirky.component.html',
  styleUrls: ['./quirky.component.css']
})
export class QuirkyComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  quirkyResponse = [];
  location = '';
  nextRoute;


  constructor(private userNotes: UserNotesService,
    private router: Router,
    private session: SessionService,
    private tastingProgress: TastingProgressService,
  ) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  getNextRoute() {
    this.nextRoute = this.tastingProgress.goToNextRoute();
  }

  // define toggle function for button
  userInputToggle(quirky) {
    //check if quirky is in array
    console.log('quirky', quirky);
    // const isInArray = this.quirkyResponse.some((userResponse) => {
    //   return userResponse === quirky;
    // });
    const isInArray = this.quirkyResponse.includes(quirky);

    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) {
      this.quirkyResponse.push(quirky);
      if (this.quirkyResponse[this.quirkyResponse.length-1] ==='none') {
        this.quirkyResponse = [];
      }
    }
    //if true, find index in array and delete
    else {
      const quirkyIndex = this.quirkyResponse.indexOf(quirky);
      this.quirkyResponse.splice(quirkyIndex, 1);
    }
    console.log('this.quirkyResponse', this.quirkyResponse);
  }

  addToUserNotesObject() {
    // Slice and dice URL to get the group type from route
    const sliceLocation = this.location.slice(9);
    console.log('sliceLocation', sliceLocation);
    console.log('this.location', this.location);
    const parsedLocation = sliceLocation.match("/(?=[^/]*$)");
    const group = sliceLocation.slice(0, parsedLocation.index);
    const keyValue = sliceLocation.match("([^/]+$)");
    console.log("group:", group);

    console.log('User data submitted.', this.quirkyResponse);
    let quirkyData = { group: group,
                      value: { key: keyValue[0],
                               value: this.quirkyResponse }};

    console.log('quirkyData:', JSON.stringify(quirkyData));
    console.log('Mr Key:', Object.keys(quirkyData).join(''));
    this.userNotes.storeTastingData(quirkyData);
  }

  callAssemble() {
    console.log('callAssemble called.');
    let userID = localStorage.getItem("user");
    this.userNotes.assembleTastingNotes();
    this.userNotes.getUserID(userID);
  }


}
