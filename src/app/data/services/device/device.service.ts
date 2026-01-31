import { Injectable } from '@angular/core';
import { DeviceItem } from '@app/types/device.interface';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  changeStateDevice(newState: boolean, device: DeviceItem): DeviceItem {
    return {
      ...device,
      state: newState,
    };
  }
}
