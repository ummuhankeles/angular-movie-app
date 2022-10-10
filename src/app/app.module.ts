import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/home/search/search.component';
import { SliderComponent } from './components/home/slider/slider.component';
import { NextDirective } from './components/home/slider/next.directive';
import { PrevDirective } from './components/home/slider/prev.directive';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './components/home/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MovieComponent } from './components/movie/movie.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { FilterComponent } from './components/filter/filter.component';
import { RateModalComponent } from './components/rate-modal/rate-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BarRatingModule } from "ngx-bar-rating";

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SliderComponent,
    NextDirective,
    PrevDirective,
    TabsComponent,
    MovieComponent,
    HomeComponent,
    FilterComponent,
    RateModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule,
    MatDialogModule,
    BarRatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
