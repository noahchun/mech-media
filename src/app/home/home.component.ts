import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service';
import { AnimeService } from '../anime.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  housingLocationList: any[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor(private animeService: AnimeService) {
    this.filteredLocationList = this.housingLocationList;
  }

  ngOnInit(): void {
    this.animeService.getAnime().subscribe((data: any) => {
      this.housingLocationList = data.data;
      this.filteredLocationList = this.housingLocationList;
      console.log('Returned list:' + this.housingLocationList);
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = [...this.housingLocationList];
      console.log('Reset list:' + this.filteredLocationList);
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      anime => {
        const title = anime?.title_english?.toLowerCase();
        console.log('Title:', title);
        return title.includes(text.toLowerCase());
      }
    );
    console.log('Filtered List:', this.filteredLocationList);
  }
}
