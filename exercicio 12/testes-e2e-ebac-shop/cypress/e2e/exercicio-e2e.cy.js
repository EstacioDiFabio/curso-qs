/// <reference types="cypress" />

import produtosPage from '../support/page_objects/produtos.page';
import checkoutPage from '../support/page_objects/checkout.page';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', async () => {
        produtosPage.adicionarProdutosAoCarrinho();
        checkoutPage.checkout();
        checkoutPage.confirm();
    });
})