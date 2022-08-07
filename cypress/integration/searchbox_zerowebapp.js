/// <reference types="cypress" />

describe('Searchbox Test', function() {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })
 
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
 
    it('Should show search result page - title', () => {
        cy.get('h2').should('contain.text', 'Search Results:')
    });
   
    it('Should show search result page - content', () => {
        cy.get('h2').parent('div').should('contain', ' The following pages were found for the query: online ')
    });
 
    it('Should show search result page - url 1', () => {
        cy.get('a').parent('li').should('contain', 'Zero - Free Access to Online Banking')
    });
 
    it('Should show search result page - url 2', () => {
        cy.get('a').parent('li').should('contain', 'Zero - Online Statements')
    });
   
});

