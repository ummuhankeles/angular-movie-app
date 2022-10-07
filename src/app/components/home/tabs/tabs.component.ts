import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  datas: any = [];
  nowPlayingData: any = [];
  upComingData: any = [];
  popularData: any = [];
  topRatedData: any = [];
  imageApi = "https://image.tmdb.org/t/p/w1280"

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit(): void {
    this.getNowPlayingData();
    this.getUpComingData();
    this.getTopRatedData();
    this.getPopularData();
  }

  getNowPlayingData() {
    this.service.getNowPlayingData()
      .subscribe(res => {
          this.nowPlayingData = res;
      })
  }

  getUpComingData() {
    this.service.getUpComingData()
      .subscribe(res => {
          this.upComingData = res;
      })
  }

  getPopularData() {
    this.service.getPopularData()
      .subscribe(res => {
          this.popularData = res;
      })
  }

  getTopRatedData() {
    this.service.getTopRatedData()
      .subscribe(res => {
          this.topRatedData = res;
      })
  }

  id: any = "now-playing"
  tabChange(ids: any) {
    this.id = ids;
    console.log(this.id)
  }

}
