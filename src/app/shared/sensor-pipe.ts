import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valueConvertToString',
})
export class SensorPipe implements PipeTransform {
  transform(amount: number, unit: string): string {
    return `${amount}${unit}`;
  }
}
