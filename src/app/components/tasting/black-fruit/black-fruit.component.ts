import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';
import { TastingProgressService } from '../../../services/tasting-progress.service';



@Component({
  selector: 'app-black-fruit',
  templateUrl: './black-fruit.component.html',
  styleUrls: ['./black-fruit.component.css']
})
export class BlackFruitComponent implements OnInit {

  blackFruitResponse = [];
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
  userInputToggle(blackFruit) {
    // check if blackFruit is in array
    console.log('blackFruit', blackFruit);
    // const isInArray = this.blackFruitResponse.some((userResponse) => {
    //   return userResponse === blackFruit;
    // });
    const isInArray = this.blackFruitResponse.includes(blackFruit);



    console.log('isInArray', isInArray);
    //if false, add
    if (!isInArray) {
      this.blackFruitResponse.push(blackFruit);
      if (this.blackFruitResponse[this.blackFruitResponse.length-1] ==='none') {
        this.blackFruitResponse = [''];
      }}
    //if true, find index in array and delete
    else {
      const blackFruitIndex = this.blackFruitResponse.indexOf(blackFruit);
      this.blackFruitResponse.splice(blackFruitIndex, 1);
    }
    console.log('this.blackFruitResponse', this.blackFruitResponse);
  }

    addToUserNotesObject() {
    // Slice and dice URL to get the group type from route
    const sliceLocation = this.location.slice(9);
    const parsedLocation = sliceLocation.match("/(?=[^/]*$)");
    const group = sliceLocation.slice(0, parsedLocation.index);
    const keyValue = sliceLocation.match("([^/]+$)");
    console.log("group:", group);

    console.log('User data submitted.', this.blackFruitResponse);
    let blackFruitData = { group: group,
                      value: { key: keyValue[0],
                               value: this.blackFruitResponse }};

    console.log('blackFruitData:', JSON.stringify(blackFruitData));
    console.log('Mr Key:', Object.keys(blackFruitData).join(''));
    this.userNotes.storeTastingData(blackFruitData);
  }
}
