import { Pipe, PipeTransform } from '@angular/core';
import { SensorItem } from '@app/types/sensor.interface';

@Pipe({
  name: 'valueConvertToString',
})
export class SensorPipe implements PipeTransform {
  transform(value: SensorItem['value']): string {
    return `${value?.amount}\n${value?.unit}`;
  }
}
