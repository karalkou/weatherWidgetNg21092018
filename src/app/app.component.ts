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
  public subscription: Subscription;

  public selectedType: string = 'tours';
  // public selectedDataItem: WidgetModel;

  public bubbleUpType(value) {
    console.log('value: ', value);
    this.selectedType = value;

    // const selectedDataItem = this.widgetDataHandled.filter((item: WidgetModel) => {
    //   return item.type === 'tours';
    // });
    // console.log('selectedDataItem: ', selectedDataItem);
  }

  ngOnInit(): void {
    this.subscription = widgetData$.subscribe((data: WidgetModel[]) => this.widgetDataHandled = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
