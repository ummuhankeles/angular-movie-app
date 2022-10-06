import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { SliderComponent } from './components/slider/slider.component';
import { NextDirective } from './components/slider/next.directive';
import { PrevDirective } from './components/slider/prev.directive';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from './components/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SliderComponent,
    NextDirective,
    PrevDirective,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
