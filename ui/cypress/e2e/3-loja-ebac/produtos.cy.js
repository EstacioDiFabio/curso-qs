/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos');
    });

    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.block-inner')
            .first()
            .click();

        cy.get('#tab-title-description > a').contains('Descrição');
    });

    it('Deve selecionar o último produto da lista', () => {
        cy.get('.block-inner')
            .last()
            .click();

        cy.get('#tab-title-description > a').contains('Descrição');
    });

    it('Deve selecionar o terceiro produto da lista', () => {
        cy.get('.block-inner')
            .eq(3)
            // .contains('Abominable Hoodie')
            .click();

        cy.get('#tab-title-description > a').contains('Descrição');
    });

    it('Deve selecionar um produto específico da lista', () => {
        cy.get('.products > .row')
            .contains('Abominable Hoodie')
            .click();

        cy.get('#tab-title-description > a').contains('Descrição');
    });
});