import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';

@Component({
  selector: 'app-quirky',
  templateUrl: './quirky.component.html',
  styleUrls: ['./quirky.component.css']
})
export class QuirkyComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  quirkyResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(quirky) {
    //check if quirky is in array
    console.log('quirky', quirky);
    const isInArray = this.quirkyResponse.some((userResponse) => {
      return userResponse === quirky;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) { this.quirkyResponse.push(quirky); }
    //if true, find index in array and delete
    else { 
      const quirkyIndex = this.quirkyResponse.indexOf(quirky);
      this.quirkyResponse.splice(quirkyIndex, 1);
    }
    console.log('this.quirkyResponse', this.quirkyResponse);
  }

  addToUserNotesObject() {
    console.log('quirky data submitted.', this.quirkyResponse);
    let quirkyData = {key: 'quirky', value: this.quirkyResponse};
    this.userNotes.storeTastingData(quirkyData);
  }

  callAssemble() {
    console.log('callAssemble called.');
    this.userNotes.assembleTastingNotes();
  }


}
