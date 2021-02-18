import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MapItemModel } from '../../models/map-item.model';
import * as moment from 'moment';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() selectedEvent = new EventEmitter();
  @Output() cancelSearchEvent = new EventEmitter();
  @Input() dataMap: MapItemModel[];
  dataList: MapItemModel[];
  search: FormControl;

  private unsubscribe$ = new Subject<void>();

  constructor() {
  }

  ngOnInit(): void {
    this.search = new FormControl();

    this.search.valueChanges
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(v => {
        if (v) {
          this.dataList = this.dataMap.filter(item => {
            if (item.name.toLowerCase().indexOf(v) > 0) {
              return item;
            }
          });
        }
      });
  }

  selectedShop(item: any) {
    this.selectedEvent.emit({
      lat: +item.address.geo.latitude,
      lng: +item.address.geo.longitude
    });
  }

  reset() {
    this.search.reset();
  }

  cancel() {
    this.reset();
    this.cancelSearchEvent.emit();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
