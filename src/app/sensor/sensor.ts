import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Layouts } from '../shared/layouts.enum';
import { SensorPipe } from '../shared/sensor-pipe';
import { Card } from '../types/card.interface';
import { ItemCard } from '../types/item-card.interface';

@Component({
  selector: 'app-sensor',
  imports: [MatIcon, SensorPipe],
  templateUrl: './sensor.html',
  styleUrl: './sensor.scss',
})
export default class SensorComponent {
  sensor = input.required<ItemCard>();
  layout = input.required<Card['layout']>();
  readonly Layout = Layouts;
  get icon() {
    return this.sensor().icon;
  }
  get label() {
    return this.sensor().label;
  }
  get value() {
    return this.sensor().value;
  }
  get containerClass() {
    return this.layout() === Layouts.horizontalLayout ? 'column' : 'row';
  }
  get type() {
    return this.sensor().type;
  }
}
