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
  /* [
    {appearance: {key: color, value: [color1, color2]}},
    {nose: {key: floral, value: smell}},
    {palate: {key: redFruit, value: berry}},
    {palate: {key: driedFruit, value: nut}},
  ]
  */

  constructor(private http: Http, ) { }

  // Push ongoing data from tasting test into arrayOfData to store
  storeTastingData(data) {
    this.arrayOfData.push(data);
    console.log(JSON.stringify(this.arrayOfData));
  }

  // Function which activates on SUBMIT TEST at the end.
  // Assembles the object before sending to database.
  assembleTastingNotes() {
    // PSEUDO-CODE
    /*
      For each entry in the array of data. {
        Access data.key and make it a notes object key
        For each value of this key: {
          Access data.value and make it a notes value of its corresponding key.
        }
      return notes object
      }
    */
    let notes = {};
    this.arrayOfData.forEach((dataObject) => {

    });
    // let notes = {};
    // this.arrayOfData.forEach((parentKey) => {
    //   console.log(parentKey);
    //   notes[parentKey.key] = parentKey.value;
    // });
    console.log(JSON.stringify(notes));
  }

  // Access API. Stores user notes in database
  addUserNotes(notes) {
  console.log('this.notes', this.notes)
  return this.http.post(`${this.BASE_URL}/api/user-entries`, this.notes)
    .map((res) => res.json())
  }
}

// THIS IS THE MODEL: ONLY FOR REFERENCE. CAN BE DELETED.
// this.notes = {
    //   appearance: {
    //     intensity: 'String',
    //     color: 'String'},
    //   nose: {
    //     floral: data.floral,
    //     redFruit: 'String',
    //     blackFruit: 'String',
    //     dryFruit: 'String',
    //     herbsSpices: 'String',
    //     quirky: 'String' },
    //   palate: {
    //     redFruit: 'String',
    //     blackFruit: 'String',
    //     dryFruit: 'String',
    //     herbsSpices: 'String',
    //     quirky: 'String' }
    //   }




// this.notes = {
    //     intensity: 'String',
    //     color: 'String'},
    //     floral: data.floral,
    //     redFruit: 'String',
    //     blackFruit: 'String',
    //     dryFruit: 'String',
    //     herbsSpices: 'String',
    //     quirky: 'String' },
    //   }
