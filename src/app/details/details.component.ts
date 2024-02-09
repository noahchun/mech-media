import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AnimeService } from '../anime.service';
import { animeDetailsData } from '../anime-details-data';



@Component({
  selector: 'app-details',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
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
  logo: string | undefined;
  mechOverview: string | undefined;
  video1: string | undefined;
  mechLabel: string | undefined;
  images: {
    [key: string]: string;
  } | undefined;
  gifs: {
    [key: string]: string;
  } | undefined;
  text: {
    [key: string]: string;
  } | undefined;
  isAnimeVisible = false;
  showVideo = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngAfterViewInit() { // delays setup of IntersectionObserver until the view has been completely initialized, needed because of async loading nature
    const flippedContainer = document.querySelector('.flip-container');
    if (flippedContainer?.classList.contains('appear')) {
      flippedContainer.classList.remove('appear');
      console.log('appear removed');
    }
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
      appearOnScroll.observe(fader); // waits until I assign a target to our observer
    });
    flippedContainer.forEach(flip => {
      appearOnScroll.observe(flip);
    });
  }

  ngOnInit() {
    if (!localStorage.getItem('foo')) { 
      localStorage.setItem('foo', 'no reload'); 
      location.reload(); 
    } else {
      localStorage.removeItem('foo'); 
    }
    this.activatedRoute.paramMap.subscribe(params => {
      const malId = params.get('id');
      console.log('Mal ID from route:', malId);
  
      if (malId) {
        const malIdNumber = Number(malId);
        this.animeService.getAnimeDetails(malIdNumber).subscribe(data => {
          this.anime = data;
          this.anime.data.synopsis = this.anime.data.synopsis.replace(/\[Written by MAL Rewrite\]/, '');
          this.logo = animeDetailsData[malId]?.images['logo'];
          this.mechOverview = animeDetailsData[malId]?.mechOverview;
          this.video1 = animeDetailsData[malId]?.video['video1'];
          this.mechLabel = animeDetailsData[malId]?.mechLabel;
          this.images = animeDetailsData[malId]?.images;
          this.gifs = animeDetailsData[malId]?.gifs;
          this.text = animeDetailsData[malId]?.text;
          console.log('text:', animeDetailsData[malId]?.text);
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
