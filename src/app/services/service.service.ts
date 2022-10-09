import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiKey = "2937a1755f75e11815ec137a11f8c4b3";
  apiURL = `https://api.themoviedb.org/3/`;

  constructor(private http: HttpClient) { }

  getPopularData() {
    let newPath = this.apiURL + `movie/popular?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getNowPlayingData() {
    let newPath = this.apiURL + `movie/now_playing?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getUpComingData() {
    let newPath = this.apiURL + `movie/upcoming?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getTopRatedData() {
    let newPath = this.apiURL + `movie/top_rated?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getMovieById(movie_id: number) {
    let newPath = this.apiURL + `movie/${movie_id}?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getReviews(movie_id: number) {
    let newPath = this.apiURL + `movie/${movie_id}/reviews?api_key=${this.apiKey}`;
    return this.http.get(newPath);
  }

  getSearchMovie(query: string) {
    let newPath = this.apiURL + `search/movie?api_key=${this.apiKey}&query=${query}`;
    return this.http.get(newPath);
  }
}
