// Import Routes so that it all works.
import { Routes } from '@angular/router';

// Import page components
import { HomeComponent } from './components/home/home.component';
import { ScanComponent } from './components/scan/scan.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { SignupComponent } from './components/user-components/signup/signup.component';
import { TastingComponent } from './components/tasting/tasting.component';
import { InstructionsComponent} from './components/tasting/instructions/instructions.component';
import { ColorSchemaComponent } from './components/tasting//color-schema/color-schema.component';
import { TastingIntroComponent } from './components/tasting/tasting-intro/tasting-intro.component';
import { NotesComponent } from './components/notes/notes.component';
import { NotesComparisonComponent} from './components/notes-comparison/notes-comparison.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasting/intro', component: TastingComponent },
  { path: 'tasting/appearance/instructions', component: TastingComponent },
  { path: 'tasting/appearance/colorSchema', component: TastingComponent },
  { path: 'tasting/nose/instructions', component: TastingComponent },
  { path: 'tasting/nose/floral', component: TastingComponent },
  { path: 'tasting/nose/redFruit', component: TastingComponent },
  { path: 'tasting/nose/blackFruit', component: TastingComponent },
  { path: 'tasting/nose/driedFruit', component: TastingComponent },
  { path: 'tasting/nose/herbs', component: TastingComponent },
  { path: 'tasting/nose/quirky', component: TastingComponent },
  { path: 'tasting/palate/instructions', component: TastingComponent },
  { path: 'tasting/palate/floral', component: TastingComponent },
  { path: 'tasting/palate/redFruit', component: TastingComponent },
  { path: 'tasting/palate/blackFruit', component: TastingComponent },
  { path: 'tasting/palate/driedFruit', component: TastingComponent },
  { path: 'tasting/palate/herbs', component: TastingComponent },
  { path: 'tasting/palate/quirky', component: TastingComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'notesComparison', component: NotesComparisonComponent },




//   { path: 'entry/:id', component: SingleEntryComponent },
];
