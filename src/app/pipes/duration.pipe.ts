import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let hours = Math.floor(value / 60);
    let minutes = value - hours * 60;
    return `${hours}h ${minutes}min`;
  }
}
