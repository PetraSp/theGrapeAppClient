import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';


@Component({
  selector: 'app-black-fruit',
  templateUrl: './black-fruit.component.html',
  styleUrls: ['./black-fruit.component.css']
})
export class BlackFruitComponent implements OnInit {

  blackFruitResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(blackFruit) {
    // check if blackFruit is in array
    console.log('blackFruit', blackFruit);
    const isInArray = this.blackFruitResponse.some((userResponse) => {
      return userResponse === blackFruit;
    });
    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) { this.blackFruitResponse.push(blackFruit); }
    //if true, find index in array and delete
    else {
      const blackFruitIndex = this.blackFruitResponse.indexOf(blackFruit);
      this.blackFruitResponse.splice(blackFruitIndex, 1);
    }
    console.log('this.blackFruitResponse', this.blackFruitResponse);
  }

  addToUserNotesObject() {
    console.log('Black Fruit data submitted.', this.blackFruitResponse);
    let blackFruitData = {key: 'blackFruit', value: this.blackFruitResponse};
    this.userNotes.storeTastingData(blackFruitData);
  }
}
