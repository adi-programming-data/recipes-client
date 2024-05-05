import { Time } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(num: number): string {
    let h: number;
    let m: number;
    m = num % 60;
    num -= m;
    h = num / 60;
    let answer: string = '';
    if (h > 0)
      answer += h + ' שעות ';
    if (m > 0)
      answer += m + ' דקות';
    return answer;
  }

}
