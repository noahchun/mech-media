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
      labels: ['Ion', 'Legion', 'Monarch', 'Northstar', 'Ronin', 'Scorch', 'Tone'],
      franchiseDescription: `
      Stand by for titanfall. In the vast frontier of Titanfall 2, Titans reign supreme
      as colossal war machines that define the ebb and flow of conflict. More than mere
      metal behemoths, Titans become an extension of their skilled pilots, forging an
      unbreakable bond. Each Titan class embodies a distinct personality, from the agile
      and nimble to the heavily armored juggernauts, reflecting the diversity of tactics
      on the battlefield.
    `
    },
    {
      id: 1,
      name: 'Pacific Rim',
      photo: `../../assets/images/pacificrimlogo.png`,
      icons: [],
      labels: [],
      franchiseDescription: ''
    },
    {
      id: 2,
      name: 'Code Geass',
      photo: `../../assets/images/codegeasslogo.png`,
      icons: [],
      labels: [],
      franchiseDescription: ''
    },
    {
      id: 3,
      name: 'Mobile Suit Gundam: Iron-Blooded Orphans',
      photo: `../../assets/images/ironbloodedlogo.png`,
      icons: [],
      labels: [],
      franchiseDescription: ''
    },
  ];

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(location => location.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

  constructor() { }
}
