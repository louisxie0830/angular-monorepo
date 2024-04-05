/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormatPipe',
  standalone: true,
})
export class CurrencyFormatPipePipe implements PipeTransform {
  transform(
    value: number,
    currencySign: string = '$',
    decimalLength: number = 2,
    chunkDelimiter: string = ',',
    decimalDelimiter: string = '.',
  ): string {
    value = value || 0;
    const result = value.toFixed(decimalLength).toString();
    const parts = result.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, chunkDelimiter);
    return currencySign + parts.join(decimalDelimiter);
  }
}
