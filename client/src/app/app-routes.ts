// Import Routes so that it all works.
import { Routes } from '@angular/router';

// Import page components
import { HomeComponent } from './components/home/home.component';
import { ScanComponent } from './components/scan/scan.component';
import { ProfileComponent } from './components/profile/profile.component';
import { TastingComponent } from './components/tasting/tasting.component';
import { AppearanceComponent } from './components/tasting/appearance/appearance.component';
import { NoseComponent } from './components/tasting/nose/nose.component';
import { PalateComponent } from './components/tasting/palate/palate.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'tasting', component: TastingComponent },
  { path: 'tasting/appearance/instructions', component: AppearanceComponent },
  { path: 'tasting/appearance/colorSchema', component: AppearanceComponent },
  { path: 'tasting/nose/instructions', component: NoseComponent },
  { path: 'tasting/nose/floral', component: NoseComponent },
  { path: 'tasting/nose/redFruit', component: NoseComponent },
  { path: 'tasting/nose/blackFruit', component: NoseComponent },
  { path: 'tasting/nose/driedFruit', component: NoseComponent },
  { path: 'tasting/nose/herbs', component: NoseComponent },
  { path: 'tasting/nose/quirky', component: NoseComponent },
  { path: 'tasting/palate/instructions', component: NoseComponent },
  { path: 'tasting/palate/floral', component: NoseComponent },
  { path: 'tasting/palate/redFruit', component: NoseComponent },
  { path: 'tasting/palate/blackFruit', component: NoseComponent },
  { path: 'tasting/palate/driedFruit', component: NoseComponent },
  { path: 'tasting/palate/herbs', component: NoseComponent },
  { path: 'tasting/palate/quirky', component: NoseComponent },



//   { path: 'entry/:id', component: SingleEntryComponent },
];
