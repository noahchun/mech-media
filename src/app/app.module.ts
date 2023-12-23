import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { DetailsComponent } from './details/details.component';
import routeConfig from './routes';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AnimeService } from './anime.service';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home Page' },
  { path: 'details/:id', component: DetailsComponent, title: 'Home details' },
];

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
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
  ],
  providers: [AnimeService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }