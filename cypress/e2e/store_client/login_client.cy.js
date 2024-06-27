/// <reference types="cypress" />    

describe('Functionality = Login', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
});

afterEach(() => {
    cy.screenshot()
});

    it('1_Must login successfully', () => {
        cy.get('#username').type('thiago_test@testmail.com')
        cy.get('#password').type('09038512aB')   
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, thiago_test (não é thiago_test? Sair)')

    });

    it('2_Should display an error message when entering invalid user', () => { 
        cy.get('#username').type('thiago@testmail.com') // fake e-mail (incorrect scenario)
        cy.get('#password').type('09038512aB')   
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('3_Should display an error message when entering an invalid password', () => {
        cy.get('#username').type('thiago_test@testmail.com') 
        cy.get('#password').type('0000000000') // fake password (incorrect scenario) 
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail thiago_test@testmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    });
});