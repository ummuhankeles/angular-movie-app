import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiKey = "2937a1755f75e11815ec137a11f8c4b3";
  popularApiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`;
  nowPlayingApiURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${this.apiKey}`;
  upComingApiUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.apiKey}`;
  topRatedApiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  getPopularData() {
    return this.http.get(this.popularApiURL);
  }

  getNowPlayingData() {
    return this.http.get(this.nowPlayingApiURL);
  }

  getUpComingData() {
    return this.http.get(this.upComingApiUrl);
  }

  getTopRatedData() {
    return this.http.get(this.topRatedApiUrl);
  }
}
