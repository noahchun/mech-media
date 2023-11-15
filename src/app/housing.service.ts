import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

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
    },
    {
      id: 1,
      name: 'Pacific Rim',
      photo: `../../assets/images/pacificrimlogo.png`,
      icons: []
    },
    {
      id: 2,
      name: 'Code Geass',
      photo: `../../assets/images/codegeasslogo.png`,
      icons: []
    },
    {
      id: 3,
      name: 'Mobile Suit Gundam: Iron-Blooded Orphans',
      photo: `../../assets/images/ironbloodedlogo.png`,
      icons: []
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
