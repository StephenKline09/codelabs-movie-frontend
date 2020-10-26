import { AuthorizationHeaderService } from './shared/services/authorization-header.service';
import { LocalStorageService } from './shared/services/local-storage.service';
import { UserService } from './shared/services/user.service';
import { CharacterService } from './shared/services/character.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { environment } from './../../../environments/environment';

//import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faSpinner, faAngleLeft, faAngleRight, faPlus, faStar, faStarHalfAlt, faArrowRight, faUpload, faVideo,
  faEdit, faPen, faTrashAlt, faSearch, faUser, faKey, faEye, faEyeSlash, faSignInAlt, faSignOutAlt, faUserPlus, faCircle
} from '@fortawesome/free-solid-svg-icons';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CharacterCardComponent } from './home/character-card/character-card.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SingleCharacterComponent } from './characters/single-character/single-character.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CharacterCardComponent,
    SignupComponent,
    LoginComponent,
    SingleCharacterComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //Observable,
  ],
  providers: [
    CharacterService,
    UserService,
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthorizationHeaderService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private library: FaIconLibrary
  ) {
    this.library.addIcons(
      faSpinner, faAngleLeft, faAngleRight, faPlus, faStar, faStarHalfAlt, faArrowRight, faUpload, faVideo,
      faEdit, faPen, faTrashAlt, faSearch, faUser, faKey, faEye, faEyeSlash, faSignInAlt, faSignOutAlt, faUserPlus, faCircle
    )
  }
 }
