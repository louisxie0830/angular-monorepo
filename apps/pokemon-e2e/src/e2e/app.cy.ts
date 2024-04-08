import { getGreeting } from '../support/app.po';

describe('pokemon-e2e', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20').as('fetchPokemonWhenInit');
    cy.intercept('GET', /https:\/\/pokeapi\.co\/api\/v2\/pokemon-species\/\d+/).as('fetchGetPokemonSpecies');
    cy.intercept('GET', /https:\/\/pokeapi\.co\/api\/v2\/pokemon\?offset=\d+&limit=\d+/).as('fetchPokemonWhenClickLoadMoreBtn');
    cy.visit('/')
  });

  it('should display pokemon message', () => {
    getGreeting().contains(/pokemon/);
  });

  it('can fetch pokemon data when init', () => {
    cy.wait('@fetchPokemonWhenInit').its('response.statusCode').should('eq', 200);
    cy.wait('@fetchGetPokemonSpecies').its('response.statusCode').should('eq', 200);
  });

  it('can check off an item as completed', () => {
    cy.get('app-card').should('have.length', 20);
  });


  it('correctly loads more Pokemon and checks cards length', () => {
    cy.wait('@fetchPokemonWhenInit').its('response.statusCode').should('eq', 200);
    cy.wait('@fetchGetPokemonSpecies').its('response.statusCode').should('eq', 200);
    cy.get('#loadMore').click();
    cy.wait('@fetchPokemonWhenClickLoadMoreBtn').its('response.statusCode').should('eq', 200);
    cy.wait('@fetchGetPokemonSpecies').its('response.statusCode').should('eq', 200);
    cy.get('app-card').should('have.length', 40);
  });
});
