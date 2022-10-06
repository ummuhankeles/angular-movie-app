import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  datas: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280"

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPopularData()
      .subscribe(res => {
          this.datas = res;
          console.log(this.datas.results)
      })
  }

}
