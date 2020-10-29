import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value+" Available In Bangalore Store";
  }

}
