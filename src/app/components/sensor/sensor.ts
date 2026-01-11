import { Component, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Layouts } from '@app/shared/layouts.enum';
import { Card } from '@app/types/card.interface';
import { ItemCard } from '@app/types/item-card.interface';
import { SensorPipe } from '@pipes/sensor-pipe';

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
