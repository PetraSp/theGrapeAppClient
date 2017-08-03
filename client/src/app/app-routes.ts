// Import Routes so that it all works.
import { Routes } from '@angular/router';

// Import page components
import { HomeComponent } from './components/home/home.component';
import { ScanComponent } from './components/scan/scan.component';
import { ProfileComponent } from './components/profile/profile.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scan', component: ScanComponent },
  { path: 'profile', component: ProfileComponent },

//   { path: 'entry/:id', component: SingleEntryComponent },
];
