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
  public title = 'weatherVidgetNg21092018';

  public widgetDataHandled: WidgetModel[];
  public subscription: Subscription;

  public selectedType: string;

  public bubbleUpType(e) {
    console.log('e: ', e);
    this.selectedType = e;
  }

  ngOnInit(): void {
    this.subscription = widgetData$.subscribe((data: WidgetModel[]) => this.widgetDataHandled = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
