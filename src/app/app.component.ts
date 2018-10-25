import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WidgetModel } from './models/weather.model';
import { widgetData$ } from '../assets/fixtures/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'weatherVidgetNg21092018';

  public widgetData$: Observable<WidgetModel[]> = widgetData$;
}
