import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';
import { MatDialog } from '@angular/material/dialog';
import { RateModalComponent } from '../rate-modal/rate-modal.component';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  datas: any = [];
  reviewsData: any = [];
  localStorageData: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";

  constructor(private service: ServiceService,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.setItems();
    this.activatedRoute.params.subscribe(params => {
      this.getMovieById(params['movie_id']);
      this.getReviews(params['movie_id']);
    })
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(RateModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration
    });
  }

  getMovieById(movie_id: number) {
    this.service.getMovieById(movie_id)
      .subscribe(res => {
        this.datas = res;
        console.log(this.datas)
      })
  }

  getReviews(movie_id: number) {
    this.service.getReviews(movie_id)
      .subscribe(res => {
        this.reviewsData = res;
      })
  }

  id: any = "about-movie"
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id)
  }

  addStorage(item: any) {
    this.localStorageData.push(item);
    localStorage.setItem('localStorageData', JSON.stringify(this.localStorageData));
    // let element = document.querySelector(".movie-save-watchlist i");
    // element?.setAttribute('style', 'color: #FF8700;');
  }

  setItems() {
    if (!localStorage.getItem('localStorageData')) {
      localStorage.setItem('localStorageData', JSON.stringify(this.localStorageData));
    } else {
      this.localStorageData = JSON.parse(localStorage.getItem('localStorageData')!);
    }
  }

}
