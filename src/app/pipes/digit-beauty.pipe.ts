import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitBeauty'
})
export class DigitBeautyPipe implements PipeTransform {

  transform(value: number) {
    return  value.toLocaleString('it-IT');
  }

}
