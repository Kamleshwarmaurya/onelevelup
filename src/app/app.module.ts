import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LandingComponent } from './components/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutMeComponent } from './components/about-me/about-me.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SpinnerComponent,
    LandingComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
