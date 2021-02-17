import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';
import { Observable } from 'rxjs';

import { MapService } from '../../services/map.service';
import { MapItemModel } from '../../models/map-item.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent implements OnInit {
  dataMap$: Observable<MapItemModel[]>;
  template: any;
  lat: number;
  lng: number;
  zoom: number;
  markerUrl = 'assets/svg/marker.svg';
  markerDisabledUrl = 'assets/svg/marker-disabled.svg';

  @ViewChild(AgmMap) agmMap: AgmMap;

  constructor(
    private mapService: MapService
  ) {
  }

  ngOnInit(): void {
    this.defaultOpts();
    this.dataMap$ = this.mapService.getData();
  }

  selectedShop(geo: { lat: number, lng: number }) {
    this.lat = geo.lat;
    this.lng = geo.lng;
  }

  setDefaultOpts() {
    this.defaultOpts();
  }

  zoomChange(zoom: number) {
    this.zoom = zoom;
  }

  centerChange($event: google.maps.LatLngLiteral) {
    this.lat = $event.lat;
    this.lng = $event.lng;
  }

  private defaultOpts() {
    this.lat = 47.3640351;
    this.lng = 8.5479338;
    this.zoom = 16;
  }
}
