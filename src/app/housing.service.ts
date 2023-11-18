import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Titanfall 2',
      photo: `../../assets/images/titanfall2logo.png`,
      icons: [`../../assets/images/icons/ionicon.png`, `../../assets/images/icons/legionicon.png`,
              `../../assets/images/icons/monarchicon.png`, `../../assets/images/icons/northstaricon.png`,
              `../../assets/images/icons/roninicon.png`, `../../assets/images/icons/scorchicon.png`,
              `../../assets/images/icons/toneicon.png`],
      labels: ['Ion', 'Legion', 'Monarch', 'Northstar', 'Ronin', 'Scorch', 'Tone']
    },
    {
      id: 1,
      name: 'Pacific Rim',
      photo: `../../assets/images/pacificrimlogo.png`,
      icons: [],
      labels: []
    },
    {
      id: 2,
      name: 'Code Geass',
      photo: `../../assets/images/codegeasslogo.png`,
      icons: [],
      labels: []
    },
    {
      id: 3,
      name: 'Mobile Suit Gundam: Iron-Blooded Orphans',
      photo: `../../assets/images/ironbloodedlogo.png`,
      icons: [],
      labels: []
    },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id === id);
  }

  constructor() { }
}
