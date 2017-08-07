import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';


@Component({
  selector: 'app-dried-fruit',
  templateUrl: './dried-fruit.component.html',
  styleUrls: ['./dried-fruit.component.css']
})
export class DriedFruitComponent implements OnInit {

  driedFruitResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(driedFruit) {
    // check if driedFruit is in array
    console.log('driedFruit', driedFruit);
    const isInArray = this.driedFruitResponse.some((userResponse) => {
      return userResponse === driedFruit;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) {
      this.driedFruitResponse.push(driedFruit);
      if (this.driedFruitResponse[this.driedFruitResponse.length-1] ==='none') {
        this.driedFruitResponse = [''];
      }
    }
    //if true, find index in array and delete
    else {
      const driedFruitIndex = this.driedFruitResponse.indexOf(driedFruit);
      this.driedFruitResponse.splice(driedFruitIndex, 1);
    }
    console.log('this.driedFruitResponse', this.driedFruitResponse);
  }

  addToUserNotesObject() {
    console.log('Dried Fruit data submitted.', this.driedFruitResponse);
    let driedFruitData = {key: 'driedFruit', value: this.driedFruitResponse};
    this.userNotes.storeTastingData(driedFruitData);
  }
  }
