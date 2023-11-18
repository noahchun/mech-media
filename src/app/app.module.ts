import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import routeConfig from './routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  // for components
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent,
  ],
  // for modules
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }