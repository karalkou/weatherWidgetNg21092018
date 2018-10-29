import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WidgetModel } from '../../types';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  @Input()
  public widgetData: WidgetModel[];

  @Output()
  public selectType: EventEmitter<string> = new EventEmitter();

  @Output()
  public selectId: EventEmitter<string> = new EventEmitter();

  public selectedType: string;

  public typeList: Array<string>;

  public getType(e: MouseEvent) {
    e.preventDefault();
    const target: HTMLElement = e.target as HTMLElement;

    this.selectedType = target.dataset.type;
    this.selectType.emit(this.selectedType);
  }

  public getId(id, firstItemId) {
    if (id) {
      this.selectId.emit(id);
    } else {
      this.selectId.emit(firstItemId);
    }

  }

  ngOnInit() {
    const typeListArr: string[] = [];

    this.widgetData.forEach((item) => {
      typeListArr.push(item.type);
    });

    this.typeList = [...(new Set(typeListArr))];
  }

}
