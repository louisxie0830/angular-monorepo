import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterPipePipe } from './filter-pipe.pipe';
import { SortPipePipe } from './sort-pipe.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [FilterPipePipe, SortPipePipe],
  declarations: [FilterPipePipe, SortPipePipe]
})
export class SharedPipeModule {}
