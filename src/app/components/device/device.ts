import { Component, computed, inject, input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSlideToggle, MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ItemService } from '@app/data/services/item/item.service';
import { DeviceDirective } from '@app/shared/derective/device/device.directive';
import { Card } from '@app/types/card.interface';
import { ItemCard } from '@app/types/item-card.interface';
@Component({
  selector: 'app-device',
  imports: [MatIcon, MatSlideToggle, DeviceDirective],
  templateUrl: './device.html',
  styleUrl: './device.scss',
})
export default class DeviceComponent {
  serviceItem = inject(ItemService);
  item = input.required<ItemCard>();
  cardId = input.required<Card['id']>();

  state = computed(() => this.item().state);
  icon = computed(() => this.item().icon);
  label = computed(() => this.item().label);

  changeDevice(event: MatSlideToggleChange) {
    this.serviceItem.changeStateDevice(event.checked, this.item(), this.cardId());
  }
}
