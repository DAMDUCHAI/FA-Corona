import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digit'
})
export class DigitPipe implements PipeTransform {

  transform(value: number) {
    return  value.toLocaleString('it-IT');
  }

}
