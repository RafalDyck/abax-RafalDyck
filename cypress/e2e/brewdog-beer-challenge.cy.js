import { expect } from 'chai';

describe('Brewdog Beer Challenge', () => {

  it('Validates that all beer produced after December 2015 has a valid "abv"', () => {
    cy.request('https://api.punkapi.com/v2/beers?brewed_after=12-2015&abv_gt=4.0')
      .then((response) => {
        response.body.forEach((beer) => {
          const abv = parseFloat(beer.abv);
          expect(abv).to.not.be.null;
          expect(abv).to.be.a('number').that.satisfies(Number.isFinite);
          expect(abv).to.be.greaterThan(4.0);
          expect(abv.toString().trim()).to.not.equal('');
        });
      });
  });

  it('Validates that all beer produced after December 2015 has a valid "name"', () => {
    cy.request('https://api.punkapi.com/v2/beers?brewed_after=12-2015')
      .then((response) => {
        response.body.forEach((beer) => {
          expect(beer.name).to.not.be.null;
          expect(beer.name.toString().trim()).to.not.equal('');
        });
      });
  });

  it('Validates that all beer produced after December 2015 has a valid "description"', () => {
    cy.request('https://api.punkapi.com/v2/beers?brewed_after=12-2015')
      .then((response) => {
        response.body.forEach((beer) => {
          expect(beer.description).to.not.be.null;
          expect(beer.description.toString().trim()).to.not.equal('');
        });
      });
  });

  it('Validates that all beer produced after December 2015 has a valid "ibu"', () => {
    cy.request('https://api.punkapi.com/v2/beers?brewed_after=12-2015')
      .then((response) => {
        response.body.forEach((beer) => {
          expect(beer.ibu).to.not.be.null;
          expect(beer.ibu).to.be.a('number');
          expect(beer.ibu).to.be.greaterThan(0);
          expect(beer.ibu.toString().trim()).to.not.equal('');
        });
      });
  });

});