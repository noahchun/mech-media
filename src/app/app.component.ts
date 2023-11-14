import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterOutlet,
    RouterLink
  ],
  template: `
  <div class="header">
  <img class="brand-logo" src="/assets/images/placeholder-logo.png" alt="logo" aria-hidden="true">
  <div class="header-options">
    <ul>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</div>
    <div class="image-container">
      <img src="./assets/images/circuitboard.svg">
      <main>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>
      <img src="./assets/images/circuitboardCopy.svg" class="mirrored-image">
    </div>
  `,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'mech-media';
}
