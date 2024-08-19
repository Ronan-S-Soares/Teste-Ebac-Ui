/// <reference types="cypress"/>


describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });
    afterEach(() => {
        cy.screenshot()
    });

    //teste sucedido
    it(
        'Deve fazer login com sucesso' , () =>{
        cy.get('#username').type('Antonio@2testes.com')
        cy.get('#password').type('Teste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, antonio (não é antonio? Sair)')
        })

        //teste de usuario invalido

        it('Deve exibir uma mensagem de erro  ao inserir usuario invalido', () => {    
        cy.get('#username').type('Antonio@2testes.com.br')
        cy.get('#password').type('Teste125')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain' , 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
            
        });
    
        //teste de senha invalida

        it('Deve exibir uma mensagem de errro na senha', () => {   
        cy.get('#username').type('Antonio@2testes.com')
        cy.get('#password').type('Teste13')
        cy.get('.woocommerce-form > .button').click()
            
        });
})