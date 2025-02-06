///<reference types="cypres"/>

describe('Funcionalidade: Login', () => {

 it('Deve fazer login com sucesso', () => {
    cy.visit('lojaebac.ebaconline.art.br/minha-conta')
    cy.get('#username').type('alison.teste@teste.com')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, alison.teste (não é alison.teste? Sair)')
 });
    
});