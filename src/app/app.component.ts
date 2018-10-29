import { Component, OnDestroy, OnInit, Output } from '@angular/core';
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

  @Output()
  public widgetDataHandled: WidgetModel[];

  public subscription: Subscription;

  ngOnInit(): void {
    this.subscription = widgetData$.subscribe((data: WidgetModel[]) => this.widgetDataHandled = data);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
