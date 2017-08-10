import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { UserNotesService } from '../../services/user-notes.service';

@Component({
  selector: 'app-notes-comparison',
  templateUrl: './notes-comparison.component.html',
  styleUrls: ['./notes-comparison.component.css']
})
export class NotesComparisonComponent implements OnInit {

  expertNotes;
  userNotes;
  colorSchema;
  noseArray;

  constructor(
    private api: ApiService,
    private userNotesApi: UserNotesService
  ) { }

  ngOnInit() {
    const wineObject = JSON.parse(this.api.wineName._body);
    this.expertNotes = wineObject[0].expertNotes;
    this.userNotes = this.userNotesApi.notes;
    console.log("NFLSHGLHSILGBLSIBGILDBGLIDBGIL", this.userNotes);
    this.colorSchema = this.userNotes.appearance.colorSchema;
    console.log("this.colorSchema", this.colorSchema);
    if (this.colorSchema === undefined) {
      this.colorSchema = 'none';
    }
    console.log("expertNotes", typeof this.expertNotes.nose.quirky, this.expertNotes.nose.quirky);

    // this.userNotes.nose.map((item) => {
    //   this.noseArray.push(item)
    // })
  }

}
