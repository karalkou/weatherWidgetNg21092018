import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { WidgetModel } from './types';
import { widgetData$ } from '../assets/fixtures/data';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public widgetDataHandled: WidgetModel[];
  public selectedDataItem: WidgetModel;
  public subscription: Subscription;

  public getFirstOfSelectedType(selectedType: string): void {
    if (!selectedType) {
      this.selectedDataItem = this.widgetDataHandled[0];
    }

    const filteredByTypeData: WidgetModel[] = this.widgetDataHandled.filter((item: WidgetModel) => {
      return item.type === selectedType;
    });

    this.selectedDataItem = filteredByTypeData[0];
  }

  public getItemById(id: string): void {
    [this.selectedDataItem] = this.widgetDataHandled.filter((item: WidgetModel) => {
      return item._id === id;
    });
  }

  ngOnInit(): void {
    this.subscription = widgetData$
      .subscribe((data: WidgetModel[]) => {
        this.widgetDataHandled = data;
        this.selectedDataItem = this.widgetDataHandled[0];
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
