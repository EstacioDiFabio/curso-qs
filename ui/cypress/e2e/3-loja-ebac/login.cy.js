/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(()=>{
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/');
    });
    
    afterEach(() => {
        cy.screenshot();
    });

    it('Deve fazer login com sucesso',  () => {       
        cy.get('#username').type('estacio.fabio@ebac.com.br');
        cy.get('#password').type('teste@123');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, estacio.fabio (não é estacio.fabio? Sair)')
    });

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('estacio.fabio@eba.com.br');
        cy.get('#password').type('teste@123');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('estacio.fabio@ebac.com.br');
        cy.get('#password').type('teste@1234');
        cy.get('.woocommerce-form > .button').click();

        cy.get('.woocommerce-error').should('exist')
    });
});