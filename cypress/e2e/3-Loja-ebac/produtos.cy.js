/// <reference types="cypress"/>
import produtosPage from "../../support/page-object/produtos.page";


describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUlr()
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get(' .block-inner')
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('deve buscar um produdo com sucesso', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')

    });

    it('deve visitar a pagina de um produto', () => {
        produtosPage.visitarProduto('ariel roll sleeve sweatshirt')

    });

    it('deve adiconar um produto ao carrinho', () => {
        let qtd = 8
        produtosPage.buscarProduto('Apollo Running Short')
        produtosPage.addProdutoCarrinho('36', '', qtd)

    });
    it.only('deve adiconar um produto ao carrinho usando massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho,
                dados[1].cor,
            dados[1].tamanho)
        })


    });
});