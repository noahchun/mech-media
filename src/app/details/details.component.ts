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
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      const malId = params.get('id');
      console.log('Mal ID from route:', malId);
  
      if (malId) {
        const malIdNumber = Number(malId);
        this.animeService.getAnimeDetails(malIdNumber).subscribe(data => {
          this.anime = data;
          this.anime.data.synopsis = this.anime.data.synopsis.replace(/\[Written by MAL Rewrite\]/, '');
      
          // Set isAnimeVisible to true after a delay
          setTimeout(() => {
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
