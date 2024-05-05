import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelStars'
})
export class LevelStarsPipe implements PipeTransform {

  transform(level: number): string {
    var answer: string = '';
    for (let index = 0; index < level; index++) {
      answer += '&#xf005';
    }
    return answer;
  }

}
