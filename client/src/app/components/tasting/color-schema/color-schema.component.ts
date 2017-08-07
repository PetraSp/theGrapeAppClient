/*jshint esversion: 6*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserNotesService } from '../../../services/user-notes.service';

@Component({
  selector: 'app-color-schema',
  templateUrl: './color-schema.component.html',
  styleUrls: ['./color-schema.component.css']
})
export class ColorSchemaComponent implements OnInit {

  //make an array for the user input from the toggle buttons
  colorResponse = [];
  location = '';

  constructor(private userNotes: UserNotesService, private router: Router) {
    this.location = router.url;
  }

  ngOnInit() {
  }

  // define toggle function for button
  userInputToggle(colorName, colorRange) {
    const colorRangeArray = [colorName, colorRange];
    
    if (this.colorResponse.length === 1) {
      this.colorResponse.shift();
    }
    this.colorResponse.push(colorRangeArray)
    console.log(JSON.stringify(this.colorResponse))
  }

  addToUserNotesObject() {
    console.log('Color Schema data submitted.', this.colorResponse);
    
    let colorSchemaData = {
      appearance: {
        key: 'color', 
        color: this.colorResponse
      }
    };

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