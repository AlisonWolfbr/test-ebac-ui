///<reference types="cypress" />

import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade de produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    
    });

    it('deve selecionar um produto da lista', () => {
        
        
    });

    it('Deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')
        cy.get('.woocommerce-tabs') .should('contain', 'Descrição')
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('Aero-Daily Fitness Tee')
         cy.get('.product_title').should('contain', 'Stark Fundamental Hoodie')
    });

    it('Deve adicionar o produto ao carrinho', () => {
    let qtd = 7
    produtosPage.buscarProduto('Stark Fundamental Hoodie')
    produtosPage.addProdutoCarrinho('M', 'Black', qtd)
    
    cy.get('.woocommerce-message').should('contain', qtd +' × “Stark Fundamental Hoodie” foram adicionados no seu carrinho.')
    })

    it.only('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados =>{
        produtosPage.buscarProduto(dados[1].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[1].tamanho, 
            dados[1].cor, 
            dados[1].quantidade)
    
        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)

        })
    
        
    })


});