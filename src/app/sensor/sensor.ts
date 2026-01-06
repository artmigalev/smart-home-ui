import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { Layouts } from '../shared/layouts.enum';
import { Sensor } from '../../types/sensor.interface';
import { SensorPipe } from '../shared/sensor-pipe';
import { Card } from '../../types/card.interface';

@Component({
  selector: 'app-sensor',
  imports: [MatIcon, SensorPipe],
  templateUrl: './sensor.html',
  styleUrl: './sensor.scss',
})
export default class SensorComponent implements Sensor {
  @Input() item!: Sensor;
  @Input() layout!: Card['layout'];
  readonly Layout = Layouts;
  get icon() {
    return this.item.icon;
  }
  get label() {
    return this.item.label;
  }
  get value() {
    return this.item.value;
  }
  get containerClass() {
    return this.layout === Layouts.horizontalLayout ? 'column' : 'row';
  }
  get type() {
    return this.item.type;
  }
}
