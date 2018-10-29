import { Component, Input, OnInit } from '@angular/core';
import { WidgetModel } from '../../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  @Input()
  public widgetData: WidgetModel[];

  public typeList: Array<string>;

  ngOnInit() {
    const typeListArr: string[] = [];

    this.widgetData.forEach((item) => {
      typeListArr.push(item.type);
    });

    this.typeList = [...(new Set(typeListArr))];
  }

}
