import { Pipe, PipeTransform } from '@angular/core';
import { ItemCard } from '@app/types/item-card.interface';

@Pipe({
  name: 'valueConvertToString',
})
export class SensorPipe implements PipeTransform {
  transform(value: ItemCard['value']): string {
    return `${value?.amount}\n${value?.unit}`;
  }
}
