class ProdutosPage {
    
    visitarUrl() {
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto) {
        const urlFormatada = nomeProduto.replace(/ /g, '-', nomeProduto);
        cy.visit(`produtos/${urlFormatada}`);
    }

    adicionarProdutoCarrinho(tamanho, cor, quantidade) {
        cy.get('.button-variable-item-'+tamanho).click();
        cy.get(`.button-variable-item-${cor}`).click();
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click();
    }

    adicionarProdutosAoCarrinho() {
        let that = this;
        cy.fixture('produtos').then(produtos => {
            produtos.map(function(produto) {
                that.buscarProduto(produto.nome);
                that.adicionarProdutoCarrinho(produto.tamanho, produto.cor, produto.quantidade);
            })
        });
    }
}

export default new ProdutosPage()