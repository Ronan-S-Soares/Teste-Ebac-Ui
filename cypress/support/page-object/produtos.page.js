class ProdutosPage{

    visitarUlr() {
        cy.visit('produtos')
    }

    buscarProdutoLista(nomeProduto) {
        cy.get('.products > .row')
        .contains(nomeProduto)
            .click()

    }

    buscarProduto(nomeProduto){
        cy.get( '[name="s"]').eq(1).type(nomeProduto)
        cy.get('.button-search').eq(1).click()
    

    }

    visitarProduto(nomePrduto) {
        //cy.visit(`produtos/${nomePrduto}`)
        const urlFormatada = nomePrduto.replace(/ /g, '-')
        cy.visit(`produtosPage/${urlFormatada}`)

        

    }

    addProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-' +tamanho).click()
        cy.get(`.button-variable-item-${cor}`).click()
        //cy.get('.plus').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('exist')

    }
}

export default new ProdutosPage()   