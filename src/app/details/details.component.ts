import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  standalone: true,
  template: `
  <article>
    <img class="listing-photo" [src]="housingLocation?.photo"
      alt="Exterior photo of {{housingLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{housingLocation?.name}}</h2>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this housing location</h2>
      <div class="icon-grid">
        <img *ngFor="let icon of housingLocation?.icons" [src]="icon" alt="Icon" class="icon">
      </div>
    </section>
  </article>
`,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);    // enables me to have access to the data about the current route
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  housingLocationID = -1;
  constructor() {
    this.housingLocationID = Number(this.route.snapshot.params['id']);    // converts the id parameter acquired from the route from a string to a number
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationID);
    console.log(this.housingLocation);
  }
}
