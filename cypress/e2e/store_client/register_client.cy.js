/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


describe('Functionality = Register', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });
    
    it('7_Must complete registration successfully', () => {
        cy.get('#reg_email').type(faker.internet.email())
        cy.get('#reg_password').type('09038512aB')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(faker.person.firstName())
        cy.get('#account_last_name').type(faker.person.lastName())
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it('8_Must complete registration successfully - Using variables', () => {

        var email = faker.internet.email()
        var nome = faker.person.firstName()
        var sobrenome = faker.person.lastName()
        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type('09038512aB')
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('9_Must complete registration successfully - Using custom command', () => {
        cy.register(faker.internet.email(), '09038512aB', faker.person.firstName(), faker.person.lastName())
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
    
});