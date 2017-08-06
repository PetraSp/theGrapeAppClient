// Import
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { routes } from './app-routes';
// The one component to rule them all. Don't delete or everything breaks.
import { AppComponent } from './app.component';

// Import Custom components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScanComponent } from './components/scan/scan.component';
import { ProfileComponent } from './components/user-components/profile/profile.component';
import { TastingComponent } from './components/tasting/tasting.component';
import { AppearanceComponent } from './components/tasting/appearance/appearance.component';
import { NoseComponent } from './components/tasting/nose/nose.component';
import { PalateComponent } from './components/tasting/palate/palate.component';
import { ApiService } from './services/api.service';
import { SessionService } from './services/session.service';
import { TastingProgressService } from './services/tasting-progress.service';
import { RouterButtonComponent } from './components/tasting/router-button/router-button.component';
import { InstructionsComponent } from './components/tasting/instructions/instructions.component';
import { ColorSchemaComponent } from './components/tasting/appearance/color-schema/color-schema.component';
import { SignupComponent } from './components/user-components/signup/signup.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { TastingIntroComponent } from './components/tasting/tasting-intro/tasting-intro.component';
import { NotesComponent } from './components/notes/notes.component';
import { QuirkyComponent } from './components/tasting/palate/quirky/quirky.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    ScanComponent,
    ProfileComponent,
    TastingIntroComponent,
    TastingComponent,
    AppearanceComponent,
    NoseComponent,
    PalateComponent,
    RouterButtonComponent,
    InstructionsComponent,
    ColorSchemaComponent,
    SignupComponent,
    LoginComponent,
    NotesComponent,
    QuirkyComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [
    ApiService,
    TastingProgressService,
    SessionService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
