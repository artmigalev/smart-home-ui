import { Component, computed, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card, ToggledData } from '../types/card.interface';
import { Layouts } from '../shared/layouts.enum';
import { TypeEntities } from '../shared/type-entities.enum';
import { DeviceType } from '../types/item-card.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],

  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export default abstract class CardComponent {
  card = input.required<Card>();
  title = computed(() => this.card().title);
  id = computed(() => this.card().id);
  layout = computed(() => this.card().layout);
  items = computed(() => this.card().items);

  get devices() {
    return this.card().items.filter(
      (item) => item.type === TypeEntities.device && Object.hasOwn(item, 'state'),
    );
  }
  get sensors() {
    return this.card().items.filter(
      (item) => item.type === TypeEntities.sensor && Object.hasOwn(item, 'state'),
    );
  }

  hasToggled = computed(() => this.devices.some((development) => development.state));

  readonly Layouts = Layouts;
  readonly TypeEntities = TypeEntities;

  toggleDevice = output<ToggledData>();

  toggleCard(event: DeviceType) {
    const toggleData: ToggledData = { statusCard: false, cardId: this.id(), device: event };
    this.toggleDevice.emit(toggleData);
  }
}
