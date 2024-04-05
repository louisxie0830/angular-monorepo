import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SortPipePipe } from './sort-pipe.pipe';
import { TruncatePipePipe } from './truncate-pipe.pipe';
import { CurrencyFormatPipePipe } from './currency-format-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [FilterPipePipe, SortPipePipe, TruncatePipePipe, CurrencyFormatPipePipe],
  declarations: [FilterPipePipe, SortPipePipe, TruncatePipePipe, CurrencyFormatPipePipe]
})
export class SharedPipeModule {}
