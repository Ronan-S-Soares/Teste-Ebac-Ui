/// <reference types="cypress"/>

describe(' Funcionalidades : Detalhes da conta', () => {
    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)

        })

    });

    it('Devecompletar detalhes da conta com sucesso', () => {
        cy.detalhesConta('Antonio', 'Armando', 'Antonio Preda')
        cy.get('.woocommerce-message').should('exist')



    });

});