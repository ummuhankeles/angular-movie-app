import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void { }

  searchData(event: any) {
    let filtered: string = event.target.value;
    this.router.navigate([`search/movie/${filtered}`])
  }
}
