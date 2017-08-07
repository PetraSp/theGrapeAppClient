import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';

@Component({
  selector: 'app-red-fruit',
  templateUrl: './red-fruit.component.html',
  styleUrls: ['./red-fruit.component.css']
})
export class RedFruitComponent implements OnInit {

    //make an array for the user input from the toggle buttons
  redFruitResponse = [];

  constructor(
    private userNotes: UserNotesService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(redFruit) {
    //check if redFruit is in array
    console.log('redFruit', redFruit);
    const isInArray = this.redFruitResponse.some((userResponse) => {
      return userResponse === redFruit;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) { this.redFruitResponse.push(redFruit); }
    //if true, find index in array and delete
    else { 
      const redFruitIndex = this.redFruitResponse.indexOf(redFruit);
      this.redFruitResponse.splice(redFruitIndex, 1);
    }
    console.log('this.redFruitResponse', this.redFruitResponse);
  }

  addToUserNotesObject() {
    console.log('redFruit data submitted.', this.redFruitResponse);
    let redFruitData = {key: 'redFruit', value: this.redFruitResponse};
    this.userNotes.storeTastingData(redFruitData);
  }

}
