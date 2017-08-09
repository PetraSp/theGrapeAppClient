import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';
import { TastingProgressService } from '../../../services/tasting-progress.service';


@Component({
  selector: 'app-red-fruit',
  templateUrl: './red-fruit.component.html',
  styleUrls: ['./red-fruit.component.css']
})
export class RedFruitComponent implements OnInit {

    //make an array for the user input from the toggle buttons
  redFruitResponse = [];
  location;
  nextRoute;

  constructor(
    private tastingProgress: TastingProgressService,
    private userNotes: UserNotesService,
    private router: Router,
  ) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  getNextRoute() {
    this.nextRoute = this.tastingProgress.goToNextRoute();
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
    if (!isInArray) {
      this.redFruitResponse.push(redFruit);
      if (this.redFruitResponse[this.redFruitResponse.length-1] ==='none') {
        this.redFruitResponse = [''];
      }
    }
    //if true, find index in array and delete
    else {
      const redFruitIndex = this.redFruitResponse.indexOf(redFruit);
      this.redFruitResponse.splice(redFruitIndex, 1);
    }
    console.log('this.redFruitResponse', this.redFruitResponse);
  }

  addToUserNotesObject() {
    // Slice and dice URL to get the group type from route
    const sliceLocation = this.location.slice(9);
    const parsedLocation = sliceLocation.match("/(?=[^/]*$)");
    const group = sliceLocation.slice(0, parsedLocation.index);
    const keyValue = sliceLocation.match("([^/]+$)");
    console.log("group:", group);

    console.log('User data submitted.', this.redFruitResponse);
    let redFruitData = { group: group,
                      value: { key: keyValue[0],
                               value: this.redFruitResponse }};

    console.log('redFruitData:', JSON.stringify(redFruitData));
    console.log('Mr Key:', Object.keys(redFruitData).join(''));
    this.userNotes.storeTastingData(redFruitData);
  }
}
