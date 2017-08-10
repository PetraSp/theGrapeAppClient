import { Component, OnInit } from '@angular/core';
import { UserNotesService } from '../../services/user-notes.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes;
  wineName;


  constructor(
    private userNotes: UserNotesService,
    private api: ApiService
  ) {}

  ngOnInit() {
    this.notes = this.userNotes.notes;
    console.log("NFLSHGLHSILGBLSIBGILDBGLIDBGIL", this.notes)
    const wineObject = JSON.parse(this.api.wineName._body);
    this.wineName = wineObject[0];
    console.log("this.wineName", this.wineName.name);
  }

}
