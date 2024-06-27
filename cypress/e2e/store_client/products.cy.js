/// <reference types="cypress" />

describe('Functionality = Products', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it('Must select a product from the list', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Aero Daily Fitness Tee')
            .click() 

            cy.get('#tab-title-description > a').should('contain', 'Descrição')
                    
    });
});