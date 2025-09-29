///<reference types="cypres"/>

describe('Funcionalidade de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    
    });

    it('deve selecionar um produto da lista', () => {
        cy.get('.product-block')
        .first()
        .click()
        
        cy.get('.woocommerce-tabs') .should('contain', 'Descrição')
    });
});