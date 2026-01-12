import { Component, input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { Layouts } from '@shared/layouts.enum';
import { MultiDeviceCard } from '@components/card/multi-device-card/multi-device-card';
import { SingleDeviceCard } from '@components/card/single-device-card/single-device-card';
import { Card } from '@app/types/card.interface';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [MatListModule, SingleDeviceCard, MultiDeviceCard],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss',
})
export default class CardListComponent {
  readonly Layouts = Layouts;

  cards = input<Card[]>();
}
