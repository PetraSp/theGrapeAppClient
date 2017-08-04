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
  { path: 'tasting/appearance', component: AppearanceComponent },
  { path: 'tasting/nose', component: NoseComponent },
  { path: 'tasting/palate', component: PalateComponent },



//   { path: 'entry/:id', component: SingleEntryComponent },
];
