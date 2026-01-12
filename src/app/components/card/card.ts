import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Layouts } from '@app/shared/layouts.enum';
import { TypeEntities } from '@app/shared/type-entities.enum';
import { Card } from '@app/types/card.interface';

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
}
