import { Component, computed, input, output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { DeviceType, ItemCard } from '../types/item-card.interface';

@Component({
  selector: 'app-device',
  imports: [MatIcon, MatSlideToggle],
  templateUrl: './device.html',
  styleUrl: './device.scss',
})
export default class DeviceComponent {
  item = input.required<ItemCard>();

  state = computed(() => this.item().state);
  icon = computed(() => this.item().icon);
  label = computed(() => this.item().label);

  changedDevice = output<DeviceType>();

  changeDevice() {
    if (Object.hasOwn(this.item(), 'state')) this.changedDevice.emit(this.item() as DeviceType);
  }
}
