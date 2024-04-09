import { getGreeting } from '../support/app.po';

describe('pokemon-e2e', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20').as('fetchPokemonWhenInit');
    cy.intercept('GET', /https:\/\/pokeapi\.co\/api\/v2\/pokemon-species\/\d+/).as('fetchGetPokemonSpecies');
    cy.intercept('GET', /https:\/\/pokeapi\.co\/api\/v2\/pokemon\?offset=\d+&limit=\d+/).as('fetchPokemonWhenClickLoadMoreBtn');
    cy.visit('/')
  });

  // 測試是否正常進入頁面並抓取頁面的標題是否為"pokemon"
  it('should display pokemon message', () => {
    getGreeting().contains(/pokemon/);
  });

  // 測試進入頁面會打兩個api是否有正常
  it('can fetch pokemon data when init', () => {
    cy.wait('@fetchPokemonWhenInit').its('response.statusCode').should('eq', 200);
    cy.wait('@fetchGetPokemonSpecies').its('response.statusCode').should('eq', 200);
  });

  // 測試打完api寶可夢小卡是否為20
  it('can check off an item as completed', () => {
    cy.get('app-card').should('have.length', 20);
  });

  // 測試按下load more按鈕, 打得api是否正常和寶可夢小卡是否為40
  it('correctly loads more Pokemon and checks cards length', () => {
    cy.wait('@fetchPokemonWhenInit').its('response.statusCode').should('eq', 200);
    cy.wait('@fetchGetPokemonSpecies').its('response.statusCode').should('eq', 200);
    cy.get('#loadMore').click();
    cy.wait('@fetchPokemonWhenClickLoadMoreBtn').its('response.statusCode').should('eq', 200);
    cy.wait('@fetchGetPokemonSpecies').its('response.statusCode').should('eq', 200);
    cy.get('app-card').should('have.length', 40);
  });
});
