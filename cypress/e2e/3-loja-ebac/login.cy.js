///<reference types="cypres"/>

describe('Funcionalidade: Login', () => {
   beforeEach(() => {
      cy.visit('lojaebac.ebaconline.art.br/minha-conta')
   });
afterEach(() => {
   cy.screenshot()
});
 it('Deve fazer login com sucesso', () => {
    
    cy.get('#username').type('alison.teste@teste.com')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()

    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, alison.teste (não é alison.teste? Sair)')
 });
    
 it('Deve exibir uma mensagem de erro ao inserir usuario invalido', () => {
   
    cy.get('#username').type('alison.teste@tseste.com')
    cy.get('#password').type('123456')
    cy.get('.woocommerce-form > .button').click()
   
    cy.get('.woocommerce-error > li') .should('exist')
         
    });

    it('deve exibir uma mensagem de erro ao inserir senha invalida', () => {
      
       cy.get('#username').type('alison.teste@teste.com')
       cy.get('#password').type('1234456')
       cy.get('.woocommerce-form > .button').click()
cy.get('.woocommerce-error > li') .should('contain', 'está incorreta. Perdeu a senha?')
cy.get('.woocommerce-error > li') .should('exist')

 });
});