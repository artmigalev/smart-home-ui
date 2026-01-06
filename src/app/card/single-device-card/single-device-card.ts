import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardContent } from '@angular/material/card';
import CardComponent from '../card';
import DeviceComponent from '../../device/device';
import SensorComponent from '../../sensor/sensor';

@Component({
  selector: 'app-single-device-card',
  imports: [MatCard, MatCardHeader, MatCardTitle, MatCardContent, SensorComponent, DeviceComponent],
  templateUrl: './single-device-card.html',
  styleUrl: './single-device-card.scss',
})
export class SingleDeviceCard extends CardComponent {}
