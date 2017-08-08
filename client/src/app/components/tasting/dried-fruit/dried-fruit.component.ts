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
    // Slice and dice URL to get the group type from route
    const sliceLocation = this.location.slice(9);
    const parsedLocation = sliceLocation.match("/(?=[^/]*$)");
    const group = sliceLocation.slice(0, parsedLocation.index);
    const keyValue = sliceLocation.match("([^/]+$)");
    console.log("group:", group);

    console.log('User data submitted.', this.driedFruitResponse);
    let driedFruitData = { group: group, 
                      value: { key: keyValue[0], 
                               value: this.driedFruitResponse }};

    console.log('driedFruitData:', JSON.stringify(driedFruitData));
    console.log('Mr Key:', Object.keys(driedFruitData).join(''));
    this.userNotes.storeTastingData(driedFruitData);
  }

}


// {
//   "appearance": {
//     "colorSchema": [["ruby","pale"]]
//   },
//   "nose": {
//     "floral": ["rose","potpourri"],
//     "redFruit": ["strawberry","red cherry"],
//     "blackFruit": ["blackcurrant","black plum"],
//     "driedFruit": ["dried figs","jamminess","baked, stewed fruits"],
//     "herbs": [""],
//     "quirky":["mushroom"]
//   },
//   "palate": {
//     "floral": [""],
//     "redFruit": ["strawberry","red plum","raspberry","red cherry","cranberry"],
//     "blackFruit": ["blackcurrant"],
//     "herbs": ["blackcurrant leaf","tomato leaf","black pepper"],
//     "quirky": ["toffee"]
//   }
// }

// {
//   "appearance": {
//     "colorSchema": ["purple","medium"]
//   },
//   "nose": {

//   },
//   "palate": {
//     "quirky": ["chocolate","wet leaves"]
//   }
// }