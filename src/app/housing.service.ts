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
      photo: `../../assets/images/titanfall2logo.png`
    },
    {
      id: 1,
      name: 'Pacific Rim',
      photo: `../../assets//images/pacificrimlogo.png`
    },
    {
      id: 2,
      name: 'Code Geass',
      photo: `../../assets//images/codegeasslogo.png`
    },
    {
      id: 3,
      name: 'Mobile Suit Gundam: Iron-Blooded Orphans',
      photo: `../../assets/images/ironbloodedlogo.png`,
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
