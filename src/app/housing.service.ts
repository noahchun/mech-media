import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  // getAllHousingLocations(): HousingLocation[] {
  //   return this.housingLocationList;
  // }

  // getHousingLocationById(id: number): HousingLocation | undefined {
  //   return this.housingLocationList.find(location => location.id === id);
  // }

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(`${firstName}, lastName: ${lastName}, email: ${email}.`);
  }

}
