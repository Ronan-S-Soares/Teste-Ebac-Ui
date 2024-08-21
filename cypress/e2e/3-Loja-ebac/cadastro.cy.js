/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro', () => {

    beforeEach(() => {
        cy.visit('my-account')

    });
    
    afterEach(() => {
        cy.screenshot()
    });

    it('Deve completar o cadastro', () => {
        var nome = faker.person.firstName()
        var email = faker.internet.email(nome)
        var senha = faker.internet.password()
        var sobrenome = faker.person.lastName()

        cy.get('#reg_email').type(email)
        cy.get('#reg_password').type(senha)
        cy.get(':nth-child(4) > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nome)
        cy.get('#account_last_name').type(sobrenome)
        cy.wait(5000)
        cy.get('.woocommerce-Button').click()
        cy.get('.woocommerce-message').should('exist')


    });
//dados para completar login
it.only('Deve completar com sucesso - usando comando personazado', () => {
    cy.preCadastro(faker.internet.email(),'Teste123', faker.person.firstName(), faker.person.lastName())
    cy.get('.woocommerce-message').should('exist')
    
});

});