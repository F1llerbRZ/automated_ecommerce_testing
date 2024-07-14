/// <reference types="cypress" />
import productsPage from "../../support/page-objects/products.page";

describe('Feature = Products', () => {

    beforeEach(() => {
        productsPage.visitUrl()
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

    it('Must search for a product successfully', () => {
       productsPage.searchProduct('') 
    });

    it('Must visit the product page', () => {
        
    });

    it('Must add product to cart', () => {
        
    });

});
