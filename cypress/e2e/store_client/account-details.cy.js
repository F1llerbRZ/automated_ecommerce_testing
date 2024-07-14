/// <reference types="cypress" />

describe('Feature: account details', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('profile').then(login => {
        cy.login(login.user, login.password)
        })
        
    });

    it('Must complete account details successfully', () => {
        cy.account_details('Thiago', 'Oliveira', 'thiago.qa')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});