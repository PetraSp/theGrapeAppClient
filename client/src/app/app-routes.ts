// Import Routes so that it all works.
import { Routes } from '@angular/router';

// Import page components
import { HomeComponent } from './components/home/home.component';
import { ScanComponent } from './components/scan/scan.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { SignupComponent } from './components/user-components/signup/signup.component';
import { TastingComponent } from './components/tasting/tasting.component';
import { AppearanceComponent } from './components/tasting/appearance/appearance.component';
import { NoseComponent } from './components/tasting/nose/nose.component';
import { PalateComponent } from './components/tasting/palate/palate.component';
import { InstructionsComponent} from './components/tasting/instructions/instructions.component';
import { ColorSchemaComponent } from './components/tasting/appearance/color-schema/color-schema.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tasting', component: TastingComponent },
  { path: 'tasting/appearance/instructions', component: TastingComponent },
  { path: 'tasting/appearance/colorSchema', component: ColorSchemaComponent },
  { path: 'tasting/nose/instructions', component: TastingComponent },
  { path: 'tasting/nose/floral', component: NoseComponent },
  { path: 'tasting/nose/redFruit', component: NoseComponent },
  { path: 'tasting/nose/blackFruit', component: NoseComponent },
  { path: 'tasting/nose/driedFruit', component: NoseComponent },
  { path: 'tasting/nose/herbs', component: NoseComponent },
  { path: 'tasting/nose/quirky', component: NoseComponent },
  { path: 'tasting/palate/instructions', component: TastingComponent },
  { path: 'tasting/palate/floral', component: NoseComponent },
  { path: 'tasting/palate/redFruit', component: NoseComponent },
  { path: 'tasting/palate/blackFruit', component: NoseComponent },
  { path: 'tasting/palate/driedFruit', component: NoseComponent },
  { path: 'tasting/palate/herbs', component: NoseComponent },
  { path: 'tasting/palate/quirky', component: NoseComponent },



//   { path: 'entry/:id', component: SingleEntryComponent },
];
