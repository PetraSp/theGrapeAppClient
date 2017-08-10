import { Component, OnInit } from '@angular/core';
import { UserNotesService } from '../../services/user-notes.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes;

  constructor(private userNotes: UserNotesService) {}

  ngOnInit() {
    this.notes = this.userNotes.notes;
    console.log("NFLSHGLHSILGBLSIBGILDBGLIDBGIL", this.notes)
  }

}
