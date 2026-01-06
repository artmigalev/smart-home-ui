import { Component, computed, input, output, signal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { Device } from '../../types/device.interface';

@Component({
  selector: 'app-device',
  imports: [MatIcon, MatSlideToggle],
  templateUrl: './device.html',
  styleUrl: './device.scss',
})
export default class DeviceComponent {
  item = input.required<Device>();

  stateChange = output<boolean>();
  state = signal(Boolean(computed(() => this.item().state)));
  icon = computed(() => this.item().icon);
  label = computed(() => this.item().label);

  changeState() {
    // this.state.set(state => !state);
    this.stateChange.emit(this.state());
  }
}
