import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  datas: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280";

  constructor(
    private service: ServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getSearchMovie(params['query']);
    })
  }

  getSearchMovie(query: string){
    this.service.getSearchMovie(query)
    .subscribe(res => {
      this.datas = res;
      console.log(this.datas)
    })
  }

}
