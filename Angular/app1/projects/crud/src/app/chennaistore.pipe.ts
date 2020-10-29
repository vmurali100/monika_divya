import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chennaistore'
})
export class ChennaistorePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " Available In Chennai Store";
  }

}
