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

  constructor(private http: Http, ) { }

  // Push ongoing data from tasting test into arrayOfData to store
  storeTastingData(data) {
    this.arrayOfData.push(data);
    console.log(JSON.stringify(this.arrayOfData));
  }

  // Function which activates on SUBMIT TEST at the end.
  // Assembles the object before sending to database.
  assembleTastingNotes() {

    let notes = {     // dataObject
      appearance: {}, // Group
      nose: {},       // Group
      palate: {}      // Group
    };

    // loops through data Array
    this.arrayOfData.forEach((dataObject) => {
      // Find main key for matching subObject with group
      const dataObjectKey = Object.keys(dataObject)[0];
      // create subObject {key: value} from main dataObject
      const data = dataObject[dataObjectKey];

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
  }

  // Access API. Stores user notes in database
  addUserNotes(notes) {
  console.log('this.notes', this.notes)
  return this.http.post(`${this.BASE_URL}/api/user-entries`, this.notes)
    .map((res) => res.json())
  }
}
