import { Component, computed, input, output } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Layouts } from '@shared/layouts.enum';
import { MultiDeviceCard } from '@components/card/multi-device-card/multi-device-card';
import { SingleDeviceCard } from '@components/card/single-device-card/single-device-card';
import { Tab } from '@app/types/tab.interface';
import { ToggledData } from '@app/types/card.interface';

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
