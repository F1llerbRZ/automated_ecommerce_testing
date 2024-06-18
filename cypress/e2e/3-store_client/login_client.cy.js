/// <reference types="cypress" />    

describe('Functionality = Login', () => {
    it('Must log in successfully', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        cy.get('#username').type('thiago_test@testmail.com')
        cy.get('#password').type('09038512aB')   
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago_test (não é thiago_test? Sair)')

    });

    it('Should display an error message when entering invalid user', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/') 
        cy.get('#username').type('thiago@testmail.com')
        cy.get('#password').type('09038512aB')   
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });
});