import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.anime = this.activatedRoute.snapshot.paramMap.get('anime');
    console.log('Anime in ngOnInit:', this.anime);
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }
}
