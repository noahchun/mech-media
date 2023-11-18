import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    RouterLink,
    CommonModule
  ],
  template: `
  <main>
  <a [routerLink]="['/']">
    <div class="header">
      <img class="brand-logo" src="/assets/images/placeholder-logo.png" alt="logo" aria-hidden="true">
      <div class="header-options">
        <ul>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
  </a>
    <div class="image-container">
      <img src="./assets/images/circuitboard.svg">
        <section class="content">
          <!-- <app-home></app-home> -->
          <router-outlet></router-outlet>
        </section>
      <img src="./assets/images/circuitboardCopy.svg" class="mirrored-image">
    </div>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'mech-media';
}
