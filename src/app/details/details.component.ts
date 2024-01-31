import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AnimeService } from '../anime.service';



@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);    // enables me to have access to the data about the current route
  @Input() anime: any; 
  animeService: AnimeService = inject(AnimeService);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  housingLocationID = -1;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });
  isAnimeVisible = false;
  showVideo = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngAfterViewInit() { // delays setup of IntersectionObserver until the view has been completely initialized, needed because of async loading nature
    setTimeout(() => {
      this.setupIntersectionObserver();
    }, 0);
  }

  private setupIntersectionObserver() {
    const faders = document.querySelectorAll('.fade-in');
    const flippedContainer = document.querySelectorAll('.flip-container');
    const appearOptions = {
      threshold: 0.5,
      rootMargin: "0px 0px -100px 0px" // make it appear once the image is 100px in from the bottom of the page
    };

    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {  // appearOnScroll is the observer
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target); // stop looking at it once the class has been added
        }
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
    flippedContainer.forEach(flip => {
      appearOnScroll.observe(flip);
    })
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const malId = params.get('id');
      console.log('Mal ID from route:', malId);
  
      if (malId) {
        const malIdNumber = Number(malId);
        this.animeService.getAnimeDetails(malIdNumber).subscribe(data => {
          this.anime = data;
          this.anime.data.synopsis = this.anime.data.synopsis.replace(/\[Written by MAL Rewrite\]/, '');
          setTimeout(() => {
            this.showVideo = true;
            this.isAnimeVisible = true;
          }, 500);
        });
      }
    });
  }
  
  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
