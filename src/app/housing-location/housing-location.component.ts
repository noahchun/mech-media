import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housinglocation';
import { RouterModule } from '@angular/router';
import { AnimeService } from '../anime.service';


@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <div *ngIf="anime"> 
        <h1>{{anime.title}}</h1>
        <img *ngIf="getLargeImageUrl()" [src]="getLargeImageUrl()" alt="Anime Image">
      </div>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.component.css'],
})
export class HousingLocationComponent implements OnInit{
  @Input() housingLocation!: HousingLocation;      // Okay, I received housingLocation from home.component and can use all of its values.
  @Input() anime: any; 

  animeService: AnimeService = inject(AnimeService);
  constructor() {
    console.log('test3');
  }
  ngOnInit(): void {
    console.log('test2');
    this.animeService.getAnime('Code Geass').subscribe(data=> {
      this.anime = data.data[0];
    });
  }

  getLargeImageUrl(): string | null {
    return this.anime?.images?.jpg?.large_image_url || null;
  }
}
