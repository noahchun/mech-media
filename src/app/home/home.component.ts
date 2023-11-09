import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

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
  }
}
