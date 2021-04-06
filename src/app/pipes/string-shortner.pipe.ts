import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringShortner'
})
export class StringShortnerPipe implements PipeTransform {

  transform(value: string, ): string {
    if (value.length > 13) {
     return value.slice(0,29) + '...';
    } else {
      return  value
    }
  }

}
