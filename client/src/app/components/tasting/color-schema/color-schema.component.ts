/*jshint esversion: 6*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';
import { TastingProgressService } from '../../../services/tasting-progress.service';


@Component({
  selector: 'app-color-schema',
  templateUrl: './color-schema.component.html',
  styleUrls: ['./color-schema.component.css']
})
export class ColorSchemaComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  colorResponse = [];
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
  userInputToggle(colorRange, colorName) {
    // console.log('check!', colorRange);
    const colorRangeArray = [colorRange, colorName];

    if (this.colorResponse.length === 1) {
      this.colorResponse.shift();
    }
    this.colorResponse.push(colorRangeArray);
    console.log(JSON.stringify(this.colorResponse))
  }

  // addToUserNotesObject() {
  //   console.log('Color Schema data submitted.', this.colorResponse);

  //   let colorSchemaData = {
  //     appearance: {
  //       key: 'color',
  //       color: this.colorResponse
  //     }
  //   };

  //   console.log('colorSchemaData:', JSON.stringify(colorSchemaData));
  //   console.log('Mr Key:', Object.keys(colorSchemaData).join(''));
  //   this.userNotes.storeTastingData(colorSchemaData);
  // }

    addToUserNotesObject() {
    // Slice and dice URL to get the group type from route
    const sliceLocation = this.location.slice(9);
    const parsedLocation = sliceLocation.match("/(?=[^/]*$)");
    const group = sliceLocation.slice(0, parsedLocation.index);
    const keyValue = sliceLocation.match("([^/]+$)");
    console.log("group:", group);

    console.log('User data submitted.', this.colorResponse);
    let colorSchemaData = { group: group,
                      value: { key: keyValue[0],
                               value: this.colorResponse[0] }}; // Change if things BREAK!

    console.log('colorSchemaData:', JSON.stringify(colorSchemaData));
    console.log('Mr Key:', Object.keys(colorSchemaData).join(''));
    this.userNotes.storeTastingData(colorSchemaData);
  }
}

// const notesSchema = {
//   appearance: {
//     intensity: String,
//     color: String},
//   nose: {
//     floral: String,
//     redFruit: String,
//     blackFruit: String,
//     dryFruit: String,
//     herbsSpices: String,
//     quirky: String },
//   palate: {
//     redFruit: String,
//     blackFruit: String,
//     dryFruit: String,
//     herbsSpices: String,
//     quirky: String }
//   }
// }
