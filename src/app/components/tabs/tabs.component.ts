import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  nowPlayingDatas: any = [];
  upComingDatas: any = [];
  topRatedDatas: any = [];
  popularDatas: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280"

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getNowPlayingData()
      .subscribe(res => {
          this.nowPlayingDatas = res;
          console.log(this.nowPlayingDatas.results)
      })
    this.service.getUpComingData()
      .subscribe(res => {
          this.upComingDatas = res;
          console.log(this.upComingDatas.results)
      })
    this.service.getTopRatedData()
      .subscribe(res => {
          this.topRatedDatas = res;
          console.log(this.topRatedDatas.results)
      })
    this.service.getPopularData()
      .subscribe(res => {
          this.popularDatas = res;
          console.log(this.popularDatas.results)
      })
  }

  id: any = "now-playing"
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id);
  }

}
