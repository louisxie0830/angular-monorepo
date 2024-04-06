import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { Subject, finalize, takeUntil } from 'rxjs';

interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface Pokemon {
  types: PokemonType[];
  name: string;
  imgSrc: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  @Input() name?: string = ''
  @Input() id?: string = '';

  isLoading = false;
  error: string | null = null;
  pokemonData: Pokemon = {
    types: [],
    name: '',
    imgSrc: ''
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    if (this.id) {
      this.apiService.getPokemonDetailsAndSpecies(this.id)
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => this.isLoading = false))
        .subscribe({
          next: (data) => this.pokemonData = data,
          error: (error) => {
            console.error('Error loading pokemon data', error);
            this.error = 'Failed to load data.';
          }
        });
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
