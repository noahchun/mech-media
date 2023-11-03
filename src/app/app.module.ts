import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';

@NgModule({
  // for components
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  // for modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HousingLocationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
