/// <reference types="cypress"/>


describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {
        cy.get(' .block-inner')
            //.first()
            //.last()
            .eq(5)
            .click()

        
     

        
        

    });
    
});