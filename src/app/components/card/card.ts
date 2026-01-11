import { Component, computed, input, output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Layouts } from '@app/shared/layouts.enum';
import { TypeEntities } from '@app/shared/type-entities.enum';
import { Card, ToggledData } from '@app/types/card.interface';
import { DeviceType } from '@app/types/item-card.interface';

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

  readonly Layouts = Layouts;
  readonly TypeEntities = TypeEntities;

  hasToggled = computed(() => this.devices.some((development) => development.state));

  toggleDevice = output<ToggledData>();

  get devices() {
    return this.card().items.filter(
      (item) => item.type === this.TypeEntities.device && Object.hasOwn(item, 'state'),
    );
  }
  get sensors() {
    return this.card().items.filter(
      (item) => item.type === this.TypeEntities.sensor && Object.hasOwn(item, 'state'),
    );
  }

  toggleCard(event: DeviceType) {
    const toggleData: ToggledData = { statusCard: false, cardId: this.id(), device: event };
    this.toggleDevice.emit(toggleData);
  }
}
