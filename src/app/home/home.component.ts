import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
          <div class="home-search">
            <p>Welcome to Mech Media! Browse our catalog of franchises.</p>
            <div class="search-bar-container">
                <input type="text" class="search-bar" placeholder="...">
          </div>
          <div class="franchise-selection">
              <app-housing-location class="franchise-logo"
                  *ngFor="let housingLocation of housingLocationList"
                  [housingLocation]="housingLocation"> <!-- binding housingLocation that is declared a line above to housingLocation in housing-location.component input-->
              </app-housing-location> <!-- Hey, housing-location.component, use housingLocation that's in my ts file. Use it as your @Input value.-->
          </div>
        </div>
    </section>`,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {

  // housingLocation: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.baseUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };

  // franchiseList: FranchiseDetails[] = [
  //   {
  //     id: 0,
  //     name: 'Titanfall 2',
  //     photo: '../../assets/images/titanfall2logo.png'
  //   },
  //   {
  //     id: 1,
  //     name: 'Pacific Rim',
  //     photo: '../../assets//images/pacificrimlogo.png'
  //   },
  //   {
  //     id: 2,
  //     name: 'Iron-Blooded Orphans',
  //     photo: '../../assets/images/ironbloodedlogo.png'
  //   }
  // ];

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();       // pulls data from HousingService via dependency injection
    this.housingService.getAllHousingLocations();
  }
}
