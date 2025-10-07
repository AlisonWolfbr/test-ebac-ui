/// <reference types="cypress" />

const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('/minha-conta');
  });

  afterEach(() => {
    cy.screenshot();
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('alison.teste@teste.com');
    cy.get('#password').type('123456');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-MyAccount-content')
      .should('contain.text', 'Olá, alison.teste');
  });

  it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario);
    cy.get('#password').type(perfil.senha);
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-MyAccount-content')
      .should('contain.text', 'Olá, alison.teste');
  });

  it('Deve exibir mensagem de erro com usuário inválido', () => {
    cy.get('#username').type('usuario.invalido@teste.com');
    cy.get('#password').type('123456');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-error')
      .should('contain.text', 'Endereço de e-mail desconhecido');
  });

  it('Deve exibir mensagem de erro com senha inválida', () => {
    cy.get('#username').type('alison.teste@teste.com');
    cy.get('#password').type('senhaerrada');
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-error')
      .should('contain.text', 'está incorreta. Perdeu a senha?');
  });

  it('Deve fazer login com sucesso - usando comando customizado', () => {
    cy.login('alison.teste@teste.com', '123456');
    cy.get('.woocommerce-MyAccount-content');
    
      
  });

});

