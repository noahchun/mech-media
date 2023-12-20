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
  housingService: HousingService = inject(HousingService);

  constructor(private animeService: AnimeService) {}

  ngOnInit(): void {
    this.animeService.getAnime().subscribe((data: any) => {
      this.housingLocationList = data.data;
    });
  }
}
