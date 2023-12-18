import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  constructor(private http: HttpClient) {
    console.log('test4');
  }
  getAnime(query: string): Observable<any> {
    console.log('test1');
    const url = `${this.baseURL}?q=${encodeURIComponent(query)}&limit=1`;

    return this.http.get(url);
  }
  private baseURL: string = 'https://api.jikan.moe/v4/anime';
}


