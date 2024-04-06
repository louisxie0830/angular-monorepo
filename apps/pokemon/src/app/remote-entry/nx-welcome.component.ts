import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
import { Subject, finalize, takeUntil } from 'rxjs';

interface Pokemon {
  id: string;
  name: string;
}

@Component({
  selector: 'app-nx-welcome',
  templateUrl: './nx-welcome.component.html',
  styleUrls: ['./nx-welcome.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  public apiUrl = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20';
  public pokemonList: Pokemon[] = [];
  public nextUrl = '';
  public isLoading = false;
  public error: string | null = null;

  constructor(private apiService: ApiService) { }

  trackByItems(index: number, item: any): number {
    return item.id;
  }

  loadMore(url: string): void {
    if (url) {
      this.apiService.getList(url)
        .pipe(
          takeUntil(this.destroy$),
          finalize(() => this.isLoading = false)
        )
        .subscribe({
          next: (data) => {
            const { next, results } = data;
            this.nextUrl = next;
            this.pokemonList = [...this.pokemonList, ...results];
          },
          error: (error) => {
            console.error('Error loading pokemon data', error);
            this.error = 'Failed to load data.';
          }
        });
    }
  }

  ngOnInit(): void {
    this.loadMore(this.apiUrl);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
