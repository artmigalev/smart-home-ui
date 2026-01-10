import { Component, computed, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ToggledData } from '../types/card.interface';
import { MultiDeviceCard } from '../card/multi-device-card/multi-device-card';
import { SingleDeviceCard } from '../card/single-device-card/single-device-card';
import { Layouts } from '../shared/layouts.enum';
import { Tab } from '../types/tab.interface';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [MatListModule, SingleDeviceCard, MultiDeviceCard],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export default class CardListComponent {
  readonly Layouts = Layouts;

  activeTab = input<Tab>();
  cards = computed(() => this.activeTab()?.cards);

  toggledData = output<ToggledData>();
}
