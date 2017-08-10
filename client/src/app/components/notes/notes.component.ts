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
  // wineName;
  // vineyard;
  // vintage;

  constructor(private userNotes: UserNotesService, private api: ApiService) {}

  ngOnInit() {
    this.notes = this.userNotes.notes;
    // const wineObject = JSON.parse(this.api.wineName._body);
    // this.wineName = wineObject[0].name;
    // this.vineyard = wineObject[0].vineyard;
    // this.vintage = wineObject[0].vintage;
    // console.log("THIS . WINE . NAME", this.wineName);
    // console.log("THIS . WINE . vineyard", this.vineyard);
  }

}
