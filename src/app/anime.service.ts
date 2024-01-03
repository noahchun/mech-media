import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private animeCache: any;
  private animeList: any[] = [];
  private currentIndex: number = 0;
  constructor(private http: HttpClient) {
    console.log('test4');
  }
  getAnime(): Observable<any> {
    // false initially
    if (this.animeList && this.currentIndex < this.animeList.length) {
      const anime = this.animeList[this.currentIndex];
      this.currentIndex++;
      console.log("Current anime:" + anime.title);
      return of({ data: [anime] });
    }
    // if there is no anime left
    this.currentIndex = 0;
    console.log('Fetching the entire anime list...');
    
    // prevent too many API calls
    const url = `${this.baseURL}?q=&genres=18&order_by=members&sort=desc`;
    return this.http.get<any>(url).pipe(
      tap(data => {
        this.animeList = data.data;
      }),
      catchError(error => {
        console.error('Error fetching anime:' + error);
        return of(null);
      })
    );
  }

  getAnimeDetails(malId: number): Observable<any> {
    const url = `${this.baseURL}/${malId}`;
    return this.http.get<any>(url).pipe(
      tap(data => {
      }),
      catchError(error => {
        console.error(`Error fetching anime details for ID ${malId}: ${error}`);
        return of(null);
      })
    );
  }

  getLargeImageUrl(anime: any): string | null {
    return anime?.images?.jpg?.large_image_url || null;
  }
  
  getSmallImageUrl(anime: any): string | null {
    return anime?.images?.jpg?.small_image_url || null;
  }

  getImageUrl(anime: any): string | null {
    return anime?.images?.jpg?.image_url || null;
  }

  private baseURL: string = 'https://api.jikan.moe/v4/anime';
}


