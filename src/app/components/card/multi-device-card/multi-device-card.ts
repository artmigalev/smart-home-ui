import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import CardComponent from '../card';
import SensorComponent from '../../sensor/sensor';
import DeviceComponent from '../../device/device';
import { MatSlideToggle } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-multi-device-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    SensorComponent,
    DeviceComponent,
    MatSlideToggle,
  ],
  templateUrl: './multi-device-card.html',
  styleUrl: './multi-device-card.scss',
})
export class MultiDeviceCard extends CardComponent {}
