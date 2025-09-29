/// <reference types="cypress" />

// Importa dados de teste (usuário e senha)
const perfil = require('../../fixtures/perfil.json');

describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('/minha-conta'); // A URL pode ser relativa (assumindo baseUrl definida no cypress.config.js)
  });

  afterEach(() => {
    cy.screenshot(); // Tira um screenshot após cada teste
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#username').type('alison.teste@teste.com');
    cy.get('#password').type('123456');
    cy.get('.woocommerce-form > .button').click();

    // Verifica se o login foi bem-sucedido
    cy.get('.woocommerce-MyAccount-content')
      .should('contain.text', 'Olá, alison.teste');
  });

  it('Deve fazer login com sucesso - Usando massa de dados', () => {
    cy.get('#username').type(perfil.usuario); // Vem do perfil.json
    cy.get('#password').type(perfil.senha);   // Vem do perfil.json
    cy.get('.woocommerce-form > .button').click();

    cy.get('.woocommerce-MyAccount-content')
      .should('contain.text', 'Olá, alison.teste');
  });

  it('Deve exibir mensagem de erro com usuário inválido', () => {
    cy.get('#username').type('usuario.invalido@teste.com');
    cy.get('#password').type('123456');
    cy.get('.woocommerce-form > .button').click();

    // Verifica se aparece a mensagem de erro
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

});

