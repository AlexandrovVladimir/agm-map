import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { MainComponent } from './containers/main/main.component';
import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [MainComponent, MapComponent, SearchComponent],
  imports: [
    CommonModule,
    MapRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: ''
      // AIzaSyBUgzdhBjUAgvO8neToFtslXrMD6Ze4JY8
    })
  ]
})
export class MapModule { }
