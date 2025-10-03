///<reference types="cypress" />

describe('Funcionalidade: Detalhes da conta', () => {
 
  beforeEach(() => {
    cy.visit('/minha-conta');
    cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha);
        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click();

    })
     
  });

  it('Deve atualizar detalhes da conta com sucesso', () => {
    cy.detalhesConta('Alison', 'Gomes', 'Alison.qa');
    cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
  });

});