import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ItemService } from '@app/data/services/item/item.service';
import { DeviceDirective } from '@app/shared/directive/device/device.directive';
import { Layouts } from '@app/shared/layouts.enum';
import { Card } from '@app/types/card.interface';
import { DeviceItem } from '@app/types/device.interface';
@Component({
  selector: 'app-device',
  imports: [MatIcon, MatSlideToggle, DeviceDirective],
  templateUrl: './device.html',
  styleUrl: './device.scss',
})
export default class DeviceComponent {
  protected layouts = Layouts;

  serviceItem = inject(ItemService);
  item = input.required<DeviceItem>();
  cardId = input.required<Card['id']>();
  typeCard = input<Card['layout']>();

  state = computed(() => this.item().state);
  icon = computed(() => this.item().icon);
  label = computed(() => this.item().label);

  changeDevice(event: MatSlideToggleChange | PointerEvent) {
    if (event instanceof MatSlideToggleChange) {
      this.serviceItem.changeStateDevice(event.checked, this.item(), this.cardId());
    } else {
      this.serviceItem.changeStateDevice(!this.state(), this.item(), this.cardId());
    }
  }
}
