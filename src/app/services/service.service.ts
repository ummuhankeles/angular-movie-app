import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  apiKey = "2937a1755f75e11815ec137a11f8c4b3";
  popularApiURL = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}`

  constructor(private http: HttpClient) { }

  getSliderData() {
    return this.http.get(this.popularApiURL);
  }
}
