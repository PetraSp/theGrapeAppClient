// Import Routes so that it all works.
import { Routes } from '@angular/router';

// Import page components
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
//   { path: 'entry/:id', component: SingleEntryComponent },
];
