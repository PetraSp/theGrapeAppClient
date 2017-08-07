import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.component.html',
  styleUrls: ['./herbs.component.css']
})
export class HerbsComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  herbsResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(herbs) {
    //check if herbs is in array
    console.log('herbs', herbs);
    const isInArray = this.herbsResponse.some((userResponse) => {
      return userResponse === herbs;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) {
      this.herbsResponse.push(herbs);
      if (this.herbsResponse[this.herbsResponse.length-1] ==='none') {
        this.herbsResponse = [''];
      }
    }
    //if true, find index in array and delete
    else {
      const herbsIndex = this.herbsResponse.indexOf(herbs);
      this.herbsResponse.splice(herbsIndex, 1);
    }
    console.log('this.herbsResponse', this.herbsResponse);
  }

  addToUserNotesObject() {
    console.log('herbs data submitted.', this.herbsResponse);
    let herbsData = {key: 'herbs', value: this.herbsResponse};
    this.userNotes.storeTastingData(herbsData);
  }

  callAssemble() {
    console.log('callAssemble called.');
    this.userNotes.assembleTastingNotes();
  }


}
