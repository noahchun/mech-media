import { Component, OnInit, inject } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AnimeService } from './anime.service';
import * as AOS from 'aos';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    RouterLink,
    CommonModule,
  ],
  template: `
  <main>
    <div class="header">
      <a [routerLink]="['/']">
        <img class="brand-logo" src="/assets/images/placeholder-logo.png" alt="logo" aria-hidden="true">
      </a>
      <div class="header-options">
        <ul>
          <li>
            <a [routerLink]="['/contact']">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  <div class="image-container">
    <div class="scrolling-content">
      <section class="content">
        <!-- <app-home></app-home> -->
        <router-outlet></router-outlet>
      </section>
    </div>
  </div>
  </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  animeService: AnimeService = inject(AnimeService);
  anime: any = null;
  constructor() {
    console.log('test3');
  }
  ngOnInit(): void {
    console.log('test2');
    this.animeService.getAnime().subscribe(data=> {
      this.anime = data.data[0];
    });
  }
  title = 'mech-media';
  getLargeImageUrl(): string | null {
    return this.anime?.images?.jpg?.large_image_url || null;
  }

  getSmallImageUrl(): string | null {
    return this.anime?.images?.jpg?.small_image_url || null;
  }
}

