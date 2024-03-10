/// <reference types="cypress"/>

import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
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

    it('Deve busar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie');
    });
    
    it('Deve buscar um produto com sucesso', () => {
        let produtoNome = 'Aether Gym Pant';
        produtosPage.buscarProduto(produtoNome);

        cy.get('.product_title').should('contain', produtoNome);
    });
    
    it('Deve visitar a página do produto', () => {
        let produtoNome = 'Aether-Gym-Pant';

        produtosPage.visitarProduto(produtoNome);
    });
    
    it('Deve adicionar produto ao carrinho', () => {
        let produtoNome = 'Abominable Hoodie';
        produtosPage.buscarProduto(produtoNome);
        let quantidade = 5;
        produtosPage.adicionarProdutoCarrinho('M', 'Green', 5);
        
        cy.get('.woocommerce-message').should('contain', `${quantidade} × “${produtoNome}” foram adicionados no seu carrinho.`);
    }); 

    it('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            let produtoNome = dados[0].nomeProduto;
            produtosPage.buscarProduto(produtoNome);
            produtosPage.adicionarProdutoCarrinho(dados[0].tamanho, dados[0].cor, dados[0].quantidade);
            
            cy.get('.woocommerce-message').should('contain', produtoNome);
        });
    }); 
});