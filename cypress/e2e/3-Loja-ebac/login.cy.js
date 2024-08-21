/// <reference types="cypress"/>

const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')

    });
    afterEach(() => {
        cy.screenshot()
    });

    //teste sucedido
    it(
        'Deve fazer login com sucesso', () => {
            cy.get('#username').type('Antonio@2testes.com')
            cy.get('#password').type('Teste123')
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, antonio (não é antonio? Sair)')
        })

    //teste de usuario invalido

    it('Deve exibir uma mensagem de erro  ao inserir usuario invalido', () => {
        cy.get('#username').type('Antonio@2testes.com.br')
        cy.get('#password').type('Teste125')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

    });

    //teste de senha invalida

    it('Deve exibir uma mensagem de errro na senha', () => {
        cy.get('#username').type('Antonio@2testes.com')
        cy.get('#password').type('Teste13')
        cy.get('.woocommerce-form > .button').click()

    });

    //Teste por massa de dados

    it('Deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, antonio (não é antonio? Sair)')
    })

    //Teste por massa de dados fixure
    it.only('Deve fazer login com sucesso usando Fixure', () => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, antonio (não é antonio? Sair)')

        })
    })

})