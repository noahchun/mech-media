import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { Router, RouterModule } from '@angular/router';
import { AnimeService } from '../anime.service';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;      // Okay, I received housingLocation from home.component and can use all of its values.
  @Input() anime: any; 

  animeService: AnimeService = inject(AnimeService);
  constructor(private router: Router) {
    console.log('test3');
  }

  navigateToDetails(): void {
    this.router.navigate(['/details', this.housingLocation.id], { state: { anime: this.anime } });
  }

  ngOnInit(): void {
    console.log('test2');
    // this.animeService.getAnime().subscribe(data => {
    //   console.log('Anime API response:', data);
    //   this.anime = data.data[0];
    //   console.log('After getAnime is called:' + this.anime.title);
    // });
  }

  getLargeImageUrl(): string | null {
    return this.anime?.images?.jpg?.large_image_url || null;
  }
  
  getSmallImageUrl(): string | null {
    return this.anime?.images?.jpg?.small_image_url || null;
  }

  getImageUrl(): string | null {
    return this.anime?.images?.jpg?.image_url || null;
  }
}
