import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class UserNotesService {

  BASE_URL: string = 'http://localhost:3000';
  notes;  // Notes object
  arrayOfData = []; // Array to store ongoing data during the tasting test
  userReferenceID;

  constructor(private http: Http, ) { }

  // Push ongoing data from tasting test into arrayOfData to store
  storeTastingData(data) {
    this.arrayOfData.push(data);
    console.log(JSON.stringify(this.arrayOfData));
  }

  getUserID(userID) {
    this.userReferenceID = userID;
  }

  // Function which activates on SUBMIT TEST at the end.
  // Assembles the object before sending to database.
  assembleTastingNotes() {

    let notes = {     // dataObject
      appearance: {
        
      }, // Group
      nose: {},       // Group
      palate: {}      // Group
    };

    // loops through data Array
    this.arrayOfData.forEach((dataObject) => {
      // Find main key for matching subObject with group
      const dataObjectKey = dataObject.group;
      console.log('dataObjectKey', dataObjectKey);
      // create subObject {key: value} from main dataObject
      const data = dataObject.value
      console.log('data', data);

      // Find to which group the subObject belongs using dataObjectKey matching
      if (dataObjectKey === 'appearance'){
        // If match store in subObject in group
        console.log('itsa appearance!!!');
        notes.appearance[data.key] = data.value;
      }
      if (dataObjectKey === 'nose'){
        console.log('itsa nose!!');
        notes.nose[data.key] = data.value;
      }
      if (dataObjectKey === 'palate'){
        console.log('itsa palate!!');
        notes.palate[data.key] = data.value;
      }
      else {
        console.log('There has been a massive error. Please check your sanity.');
      }
    });
    console.log(JSON.stringify(notes));
    this.notes = notes;
    this.addUserNotes();
  }

  // Access API. Stores user notes in database
  addUserNotes() {
  console.log('We are in addUserNotes', this.notes)
  return this.http.post(`${this.BASE_URL}/api/userNotes`, this.notes)
    // .map((res) => res.json())
    .subscribe(
          res => {
            console.log('Registration successful');
          },
          error => {
            console.log(error);
          });
  }
}



// {
//   "appearance": {
//     "colorSchema":["ruby","pale"]
//   },
//   "nose":{
//     "floral":["rose","violet"],
//     "redFruit":["strawberry","red plum","raspberry","red cherry","cranberry"],
//     "blackFruit":["","blackcurrant","black plum"],
//     "driedFruit":["dried figs","jamminess","prunes","baked, stewed fruits","raisins"],
//     "herbs":[""],
//     "quirky":["mushroom","chocolate"]
//   },
//   "palate": {
//     "floral": ["violet","potpourri"],
//     "redFruit":["red plum"],
//     "blackFruit":["black plum"],
//     "herbs":[],
//     "quirky": ["toffee","mushroom"]
//     }
// }