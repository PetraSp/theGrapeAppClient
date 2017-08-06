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
import { ApiService } from './services/api.service';
import { SessionService } from './services/session.service';
import { TastingProgressService } from './services/tasting-progress.service';
import { RouterButtonComponent } from './components/tasting/router-button/router-button.component';
import { InstructionsComponent } from './components/tasting/instructions/instructions.component';
import { ColorSchemaComponent } from './components/tasting/color-schema/color-schema.component';
import { SignupComponent } from './components/user-components/signup/signup.component';
import { LoginComponent } from './components/user-components/login/login.component';
import { TastingIntroComponent } from './components/tasting/tasting-intro/tasting-intro.component';
import { NotesComponent } from './components/notes/notes.component';
import { QuirkyComponent } from './components/tasting/quirky/quirky.component';
import { FloralComponent } from './components/tasting/floral/floral.component';
import { RedFruitComponent } from './components/tasting/red-fruit/red-fruit.component';
import { BlackFruitComponent } from './components/tasting/black-fruit/black-fruit.component';
import { DriedFruitComponent } from './components/tasting/dried-fruit/dried-fruit.component';
import { HerbsComponent } from './components/tasting/herbs/herbs.component';
import { NotesComparisonComponent } from './components/notes-comparison/notes-comparison.component';

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
    RouterButtonComponent,
    InstructionsComponent,
    ColorSchemaComponent,
    SignupComponent,
    LoginComponent,
    NotesComponent,
    QuirkyComponent,
    FloralComponent,
    RedFruitComponent,
    BlackFruitComponent,
    DriedFruitComponent,
    HerbsComponent,
    NotesComparisonComponent,
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
