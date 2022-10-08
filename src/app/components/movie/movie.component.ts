import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  datas: any = [];
  reviewsData: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";

  constructor(private service: ServiceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getMovieById(params['movie_id']);
      this.getReviews(params['movie_id']);
    }) 
  }

  getMovieById(movie_id: number) {
    this.service.getMovieById(movie_id)
      .subscribe(res => {
        this.datas = res;
      })
  }

  getReviews(movie_id: number) {
    this.service.getReviews(movie_id)
      .subscribe(res => {
        this.reviewsData = res;
        console.log(this.reviewsData)
      })
  }

  id: any = "about-movie"
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id)
  }

}
