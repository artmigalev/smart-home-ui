import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Card } from '../../types/card.interface';
import { MultiDeviceCard } from '../card/multi-device-card/multi-device-card';
import { SingleDeviceCard } from '../card/single-device-card/single-device-card';
import { Layouts } from '../shared/layouts.enum';
const cardsArray = [
  {
    id: 'balcony-weather',
    title: 'Balcony',
    layout: 'horizontalLayout',
    items: [
      {
        type: 'sensor',
        icon: 'thermostat',
        label: 'Temperature',
        value: {
          amount: 18.5,
          unit: '\u00B0C',
        },
      },
      {
        type: 'sensor',
        icon: 'water_drop',
        label: 'Humidity',
        value: {
          amount: 72,
          unit: '%',
        },
      },
      {
        type: 'sensor',
        icon: 'cloud',
        label: 'Weather',
        value: {
          amount: 1,
          unit: 'clear',
        },
      },
    ],
  },
  {
    id: 'indoor-rooms',
    title: 'Rooms',
    layout: 'verticalLayout',
    items: [
      {
        type: 'sensor',
        icon: 'co2',
        label: 'CO2 Sensor',
        value: {
          amount: 520,
          unit: 'ppm',
        },
      },
      {
        type: 'sensor',
        icon: 'water_drop',
        label: 'Humidity',
        value: {
          amount: 45,
          unit: '%',
        },
      },
    ],
  },
  {
    id: 'bathroom-motion',
    title: 'Bathroom',
    layout: 'singleDevice',
    items: [
      {
        type: 'sensor',
        icon: 'motion_photos_on',
        label: 'Motion Sensor',
        value: {
          amount: 1,
          unit: 'detected',
        },
      },
    ],
  },
  {
    id: 'living-room-mixed',
    title: 'Living Room',
    layout: 'verticalLayout',
    items: [
      {
        type: 'device',
        icon: 'lightbulb',
        label: 'Floor Lamp',
        state: true,
      },
      {
        type: 'device',
        icon: 'power',
        label: 'TV Socket',
        state: false,
      },
      {
        type: 'sensor',
        icon: 'thermostat',
        label: 'Temperature',
        value: {
          amount: 23.5,
          unit: '\u00B0C',
        },
      },
      {
        type: 'sensor',
        icon: 'co2',
        label: 'CO2 Sensor',
        value: {
          amount: 610,
          unit: 'ppm',
        },
      },
    ],
  },
];
@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [MatListModule, SingleDeviceCard, MultiDeviceCard],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export default class CardListComponent {
  cards = cardsArray as Card[];
  readonly Layouts = Layouts;
}
