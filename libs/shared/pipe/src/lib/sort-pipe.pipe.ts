import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPipe',
  standalone: true,
})
export class SortPipePipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  transform(array: any[], field: string, direction: string = 'asc'): any[] {
    if (!Array.isArray(array)) {
      return [];
    }
    array.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });

    return direction === 'desc' ? array.reverse() : array;
  }
}
