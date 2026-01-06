import { Component, computed, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Card } from '../../types/card.interface';
import { Layouts } from '../shared/layouts.enum';
import { TypeEntities } from '../shared/type-entities.enum';

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
